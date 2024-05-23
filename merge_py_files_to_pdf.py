import sys
from pathlib import Path
from fpdf import FPDF

def add_file_to_pdf(pdf, file_path):
    with open(file_path, 'r', encoding='utf-8') as file:
        content = file.read()
    pdf.add_page()
    pdf.set_font("Arial", size=12)
    for line in content.split('\n'):
        pdf.cell(0, 10, line.encode('latin-1', 'replace').decode('latin-1'), ln=True)

def generate_pdf_from_py_files(source_dir, output_filename):
    source_path = Path(source_dir)
    py_files = list(source_path.glob('**/*.py'))
    pdf = FPDF()

    for py_file in py_files:
        add_file_to_pdf(pdf, py_file)

    pdf.output(output_filename)
    print(f"Merged {len(py_files)} Python files into {output_filename}")

if __name__ == "__main__":
    if len(sys.argv) != 3:
        print("Usage: python script.py <source_directory> <output_pdf>")
        sys.exit(1)

    source_directory = sys.argv[1]
    output_pdf = sys.argv[2]

    generate_pdf_from_py_files(source_directory, output_pdf)
