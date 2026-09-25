import shutil
import os

# Source images from your portfolio-v2
sources = {
    r"D:\ASWIN-S-PORTFOLIO\portfolio-v2\img2.HEIC": "profile_1.heic",
    r"D:\ASWIN-S-PORTFOLIO\portfolio-v2\img1.HEIC": "profile_2.heic",
    r"D:\ASWIN-S-PORTFOLIO\portfolio-v2\Book_image.png": "bookstore.png",
    r"D:\ASWIN-S-PORTFOLIO\portfolio-v2\System_image.png": "system_design.png"
}

# Target public directory
target_dir = r"d:\ASWIN-S-PORTFOLIO\portfolio-animated\public"

if not os.path.exists(target_dir):
    os.makedirs(target_dir)

for src, dest_name in sources.items():
    dest_path = os.path.join(target_dir, dest_name)
    try:
        if os.path.exists(src):
            shutil.copy(src, dest_path)
            print(f"Successfully copied {os.path.basename(src)} to {dest_name}")
        else:
            print(f"Source file NOT FOUND: {src}")
    except Exception as e:
        print(f"Error copying {dest_name}: {e}")

print("\nAsset update complete! Please refresh your browser.")
print("NOTE: Browsers do not natively support HEIC files. If your profile images don't show, please convert them to JPG and update the code.")
