---
sidebar_label: 'Folder Structure'
sidebar_position: 6
---

#

## Folder Structure

Folders are suffixed with `red` or `green` to indicate the type of data that is stored there. Red is for potentially sensitive data that should not be shared outside. Green is for data that can be shared with the outside world. When you log into your sandboxes, you will have a number of folders available for you. To get started, we will concentrate on the `library-red`, `red`, and `home` folders.

This [reference page](../explainers/file_structure.md) goes through the other folders and explain what they are for and how they should be used. 


import Tabs from '@theme/Tabs';

import TabItem from '@theme/TabItem';

:::tip[Useful Folders]

<Tabs>
  <TabItem value="library-red" label="library-red">Available at `library-red` in your sandbox, this is a read-only folder that is shared between all users. It contains the data you need for your analyses. `library-red` is slower storage of large capacity (\>8 PiB as of February). For large files, the entire file must be read and cached first by gcsfuse; direct file seeking to a specific part of the file is not possible.For high-performance or large files, it may be better to make a copy to `red` or `home/ivm`.`library-red` corresponds to the Google Storage bucket `gs://qmul-sandbox-production-library-red/`  (read-write access only for admins). `library-red` stores curated and raw data necessary for your analysis. This is where you will find the data you need to run your analysis. It includes several subfolders, each designated for specific data types and purposes. If you find a folder without a readme file, please contact the Genes and Health team for more information on its intended use.</TabItem>
  <TabItem value="red" label="red">`red` is used directly by the virtual machine, and is specific to each sandbox. Users in the same sandbox can view the contents of the red folder. Most organisations use this folder to store and run their analysis. It is advisable to create your own directory in the red folder to store your data. This will allow you to share your data with other users in the same sandbox without risking accidental deletion by others. `red` has slower storage than home/ivm but is backed up. We strongly recommend using this folder to store your data and any analysis files you are running frequently to avoid losing your work.</TabItem>
  <TabItem value="Home" label="Home">Available at `/home/ivm` in your sandbox, this is your personal folder. This folder can be used to store any files you wish to keep, but it is not backed up. If you delete a file from here, it is gone forever. If you have access to multiple sandboxes, your `/home` folder will be accessible from all of them. `/home/ivm` is semi-fast (HDD) storage and as such is faster than other parts of the sandbox. It might be worth running some jobs here, especially if you are loading large amounts of data. However, remember that this folder is not backed up, so anything you want to keep should be moved to the red folder.</TabItem>
</Tabs>

:::