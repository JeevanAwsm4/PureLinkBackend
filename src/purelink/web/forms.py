from django import forms
from web.models import Donor,Wantblood
from django import forms

class DonorForm(forms.ModelForm):
    class Meta:
        model = Donor
        fields = '__all__'
        widgets = {
            'name': forms.TextInput(attrs={'class': 'customInput', 'placeholder': 'Enter your name','id':'donateName'}),
            'blood_group': forms.Select(attrs={'class': 'customSelect', 'placeholder': 'Select Blood Group','id':'donateBloodGroup'}),
            'phone_no': forms.TextInput(attrs={'class': 'customInput', 'placeholder': 'Enter your phone number','id':'donatePhoneNo'}),
            'aadhaar_number': forms.TextInput(attrs={'class': 'customInput', 'placeholder': 'Enter your Aadhaar number','id':'donateAadhaarNumber'}),
            'age': forms.NumberInput(attrs={'class': 'customInput', 'placeholder': 'Enter your age','id':'donateAge'}),
            'address': forms.Textarea(attrs={'class': 'customInput', 'placeholder': 'Enter your address','id':'donateAddress'}),
            'has_tattoo': forms.Select(attrs={'class': 'customInput','id':''}),
            'latitude': forms.TextInput(attrs={'class': 'customInput', 'placeholder': 'Enter latitude','id':'latitude'}),
            'longitude': forms.TextInput(attrs={'class': 'customInput', 'placeholder': 'Enter longitude','id':'longitude'}),
        }

    def get_excel_path():
        static_dir = os.path.join(BASE_DIR, 'static')
        excel_file_path = os.path.join(static_dir, 'data', 'Hospitals.xlsx')
        return excel_file_path

def get_hospitals_from_excel():
    excel_sheet_path = get_excel_path()
    workbook = load_workbook(excel_sheet_path)
    sheet = workbook.active

    hospitals = []
    for row in sheet.iter_rows(min_row=2, values_only=True):
        hospital_name = row[0]
        latitude = row[1]
        longitude = row[2]

        hospitals.append({
            'name': hospital_name,
            'latitude': latitude,
            'longitude': longitude,
        })

    return hospitals

class Wantbloodform(forms.ModelForm):
    hospitals = forms.ChoiceField(choices=[], required=True, widget=forms.Select(attrs={'class': 'customSelect', 'placeholder': 'Select Hospital'}))

    def __init__(self, *args, **kwargs):
        super(Wantbloodform, self).__init__(*args, **kwargs)
        hospitals_choices = get_hospitals_from_excel()
        self.fields['hospitals'].choices = [(hospital['name'], hospital['name']) for hospital in hospitals_choices]

    class Meta:
        model = Wantblood
        fields = '__all__'
        widgets = {
            'name': forms.TextInput(attrs={'class': 'customInput', 'placeholder': 'Enter your name', 'id': 'donateName'}),
            'blood_group': forms.Select(attrs={'class': 'customSelect', 'placeholder': 'Select Blood Group', 'id': 'donateBloodGroup'}),
            'phone_no': forms.TextInput(attrs={'class': 'customInput', 'placeholder': 'Enter your phone number', 'id': 'donatePhoneNo'}),
            'age': forms.NumberInput(attrs={'class': 'customInput', 'placeholder': 'Enter your age', 'id': 'donateAge'}),
        }
