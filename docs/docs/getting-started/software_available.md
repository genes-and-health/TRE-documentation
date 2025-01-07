---
sidebar_label: 'Software Available'
sidebar_position: 8
---

# 

## Linux command line software

A very comprehensive set of genomics and genetics software is available for running from the Linux Terminal command line. See also Appendix for example scripts.

Some software has very good multithreading e.g. plink2 or regenie. If you run these on the 64 core ivm (please test on the cheap 2-core machine first) you can get performance quite close to high performance compute (HPC) for some medium sized applications, and you do not have to learn WDL scripts. Alternatively, true cloud HPC is available using WDL Pipelines (see below).

## Programming languages

There are a number of different languages available on the TRE including Python and R. We also have Bash as a shell program and command language.

### Python

It is worth noting that Python does not have the normal virtual environment setup that you might be used to. It is not possible to install packages using `pip install` as you would on your local machine as the TRE does not have internet access, and therefore cannot connect to the Python Package Index (PyPI), or a specific GitHub repository. Packages are installed by the Sanger Institute and are available to all users.

#### Jupyter notebooks

Jupyter is available in Applications menu as graphical user interface and can also be run from the Linux command line, by running `jupyter notebook` in the terminal. 

#### VS Code

The VS Code editor is available in Applications menu as graphical user interface and via the command line by using `code .`. It has limited plugins available as they must be specifically requested and installed by the Sanger Institute. The Jupyter notebook plugin available already installed.

Any commands or scripts that rely on outside software will not work in the VS Code terminal unless the software is installed in the Linux command line. For example, Github Co-pilot will not work in the VS Code terminal.


### R

RStudio is available in Applications menu as graphical user interface for programmers interested in R language. It can be launched from the command line via `rstudio`.

## Instructions for specific software

### Integrated Genome Viewer (IGV)

We have installed IGV to run from the Linux Terminal command line (not the web browser version). Make sure you are using the right genome fasta for your cram files, otherwise you will get an 'md5 error' (e.g. the default hg19 will not work with Wellcome Sanger Institute crams).

Example for the 5236 Wellcome Sanger Institute low depth exomes:

```bash
/usr/local/bin/IGV_Linux_2.12.3/igv.sh --genome /genesandhealth/library-red/genesandhealth/exome_seq/2019_11__5236_GNHonly/crams/hs38DH.fa
/genesandhealth/library-red/genesandhealth/exome_seq/2019_11__5236_GNHonly/crams/sc_autozygELGH6823965.cramb
```


The default set of (hg19) files for IGV are found here

```bash
/genesandhealth/library-green/sanger/igv/
```

### LibreOffice

LibreOffice provides equivalents for Microsoft Excel, Powerpoint, Word etc and is available in Applications menu as graphical user interface (not from Linux command line).

### Git

Git available from the Linux command line for single user use and has some limited integration with RStudio and Jupyter Notebooks. However given the fact that the TRE does not have internet access and everyone is signed in as the same user, Git's use is limited. This may change in the future.

## File browser shortcuts

The file browser for Xfce is called 'Thunar'. Settings and defaults _should_ persist between sessions but do not always.

- Detailed view [ctrl + 2]
- New tab [ctrl + t] (only works if the TRE is in fullscreen mode - Chrome will create a new tab otherwise)
