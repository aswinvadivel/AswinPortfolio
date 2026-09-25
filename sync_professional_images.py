import shutil
import os

source_dir = r"C:\Users\Hp\.gemini\antigravity\brain\2011baab-312a-4aff-b1b4-bdbe8c950573"
target_dir = r"d:\ASWIN-S-PORTFOLIO\portfolio-animated\public"

images = {
    "bookstore_project_thumbnail_png_1772909750969.png": "bookstore.png",
    "system_design_generator_thumbnail_png_1772909769093.png": "system_design.png",
    "profile_photo_1_png_1772909853066.png": "profile_1.png",
    "profile_photo_2_png_1772909873950.png": "profile_2.png"
}

for src_name, dest_name in images.items():
    src_path = os.path.join(source_dir, src_name)
    dest_path = os.path.join(target_dir, dest_name)
    try:
        if os.path.exists(src_path):
            shutil.copy(src_path, dest_path)
            print(f"Copied {src_name} to {dest_name}")
        else:
            print(f"Source not found: {src_path}")
    except Exception as e:
        print(f"Error copying {src_name}: {e}")
