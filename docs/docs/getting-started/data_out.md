---
sidebar_label: 'Getting your results out'
sidebar_position: 9
---

# 

## Getting your results out

You might be wondering how do I get my results of my analytical code 
out into the world so they can be used in publications or other studies. 

## What is allowed out?
Individual level data is not allowed out of the TRE. Any data out requests are reviewed by the Genes & Health core team to make sure they do not contain individual level data. Summary statistics, graphs etc are all usually fine. For more information, please read the below policy document:

[Download file: ](files/Policy_v2.5.pdf) Policy - open disclosure of phenotypes and variants with counts and small numbers - v2.5

## Existing data
There are number of files in `library-green` that are available for download. These do not need a request to be made.

## Requesting data
You can make a request to download your results by right-clicking the file and selecting "request file download" for any file in:

```bash
/genesandhealth/red
```
or

```bash
/genesandhealth/pipeline
```

 This sends an automated email to the Genes & Health team. If you have not received a response within 48h please feel free to chase us up (e.g. by Slack). The team will copy the data to either `/green` (for users of your sandbox only, to be able to download) or to `/library-green` (for all users to be able to download)(see above). Please note that you can make one data out request per week.

## Accessing TRE data from external systems/internet

For the __Old TRE__, users can download data from green or library-green using linux command line gsutil (to install see [https://cloud.google.com/storage/docs/gsutil](https://cloud.google.com/storage/docs/gsutil)). Alternatively the browser based Google Cloud Console offers an easy method for simple storage tasks ([https://console.cloud.google.com/](https://console.cloud.google.com/)). Various other software tools also work with google storage.

For the __New TRE__, users can download data from greendownloads or library-green using linux command line [gsutil](https://cloud.google.com/storage/docs/gsutil).

Alternatively, you can use the web-interface for your Sandbox specific green-downloads bucket, which you can find using the widget below:



import SandboxSelector from '@site/src/components/sandbox_menu';

<SandboxSelector />

From your external system, ideally Linux server rather than laptop if you are downloading lots of data (e.g. our GWAS).

Login to gcloud with:

```bash
 _gcloud auth login_
```

Login with your [username@genesandhealth.qmul.ac.uk](mailto:username@genesandhealth.qmul.ac.uk) that you use for TRE access from your browser. It is likely to ask you to 2 Factor Authenticate either via phone or via a website link.

<!--Run something like:

```bash
 _gsutil ls gs://qmul-sandbox-production-library-green/_
```
-->
From a multicore Linux server, and especially if you are trying to transfer lots of data/files

```bash
gcloud storage buckets list gs://qmul-sandbox-production-library-green/_
```

To transfer file use:

```bash
gcloud storage cp <local-file-path> gs://<bucket-name>/<destination-path>
```

Lots of helpful information on gsutil via google search.
