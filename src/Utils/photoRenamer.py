import os

# Current directory = parent directory containing folders
parent_dir = r"C:\Users\ASUS\Downloads\reshmafoundationImages\Images"

for folder_name in os.listdir(parent_dir):

    folder_path = os.path.join(parent_dir, folder_name)

    # Skip if not a folder
    if not os.path.isdir(folder_path):
        continue

    # Get all files
    files = [
        f for f in os.listdir(folder_path)
        if os.path.isfile(os.path.join(folder_path, f))
    ]

    # Optional: sort files
    files.sort()

    # Step 1: rename temporarily to avoid conflicts
    for idx, file in enumerate(files, start=1):
        old_path = os.path.join(folder_path, file)
        ext = os.path.splitext(file)[1]

        temp_name = f"temp_{idx}{ext}"
        temp_path = os.path.join(folder_path, temp_name)

        os.rename(old_path, temp_path)

    # Refresh file list
    temp_files = sorted(os.listdir(folder_path))

    # Step 2: final rename
    for idx, file in enumerate(temp_files, start=1):

        old_path = os.path.join(folder_path, file)
        ext = os.path.splitext(file)[1]

        new_name = f"{folder_name}{idx}{ext}"
        new_path = os.path.join(folder_path, new_name)

        os.rename(old_path, new_path)

print("All folders renamed successfully!")