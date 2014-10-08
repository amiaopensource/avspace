avspace
=======

ArchivesSpace Plugin for AV Materials


## Getting Started

For detailed instructions, see:
     https://github.com/archivesspace/archivesspace/blob/master/plugins/README.md

1. Stop ArchivesSpace if it is running

2. Download the release from the releases tab

3. Unzip it and move it to the plugins directory. Make sure to use the '-d' flag, or to create 'plugins/avspace/avspace.zip' and expand there.

4. Open config/config.yml and find the 'plugins' line. Make sure it is uncommented (no leading '#') and add 'avspace' to the list.

5. Restart ArchiveSpace. You should see 'AV Space' in the plugins menu.

Example:
     mv avspace.zip archivesspace/plugins/
     cd archivesspace/plugins
     unzip avspace.zip -d avspace
     cd ../
     ./archivesspace.sh
