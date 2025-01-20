---
sidebar_label: 'Starting the TRE'
sidebar_position: 3
---

# 

## **Starting the TRE**

<!-- Having selected your [_username@genesandhealth.qmul.ac.uk_](mailto:username@genesandhealth.qmul.ac.uk) account as your Chrome Profile, point your Chrome browser to one of the following URLs:

- __New TRE__ - [https://new-production.genesandhealth.qmul.ac.uk/](https://new-production.genesandhealth.qmul.ac.uk) - If you've been notified that your sandbox has been transitioned to the new version. -->

Having selected your [_username@genesandhealth.qmul.ac.uk_](mailto:username@genesandhealth.qmul.ac.uk) account as your Chrome Profile, enter the G&H TRE’s URL in your Chrome browser.  Your URL will start with [https://new-production.genesandhealth.qmul.ac.uk/](https://new-production.genesandhealth.qmul.ac.uk). The full URL is dependent on your sandbox and can be obtained from the dropdown below.

This will take you to the TRE login page. You will be asked to enter your username and password. The username is the one you have been given by the Genes and Health team, and the password is the one you have set up when you first logged in.

If you want to go a specific sandbox, you can use the following URL, and replace the sandbox number with the one you want to access:

import SandboxSelectorWithOldNewLinks from '@site/src/components/sandbox_urls';

<SandboxSelectorWithOldNewLinks />



## Choosing your required machine configuration

Once logged in, you will be taken to the **Virtual Machines** page where you can start a new machine or connect to an existing one.

![IVM](files/config.png)

You will be offered a variety of virtual machine types.

:::warning

Choose the **Standard** machine unless a script requires high memory or increased CPU capacity. Test your script on the Standard machine first, as other options are more expensive.

:::

**Note**: Some machine types have many CPUs, which are suitable for multithreaded applications like plink or regenie that can fully utilise them. These applications may sometimes run input/output operations too quickly for standard Google bucket storage, requiring you to copy key files to faster local storage (see below).

## Choosing a custom machine configuration

It is possible that sometimes you may require a Virtual Machine that offers resources different to the standard flavors i.e. higher-memory, higher-cpu or memory-optimised instances. You can choose a custom VM configuration from the **Virtual Machines** page by expanding the **Use custom Virtual Machine profile** section at the bottom.

![IVM](files/customvm.png)

:::warning

Choose the **Use custom Virtual Machine profile** only when absolutely necessary, use **Standard** machine unless a script requires high memory or increased CPU capacity. Excess use of higher-spec machines can significantly impact running costs. Test your script on the Standard machine first, as other options are more expensive.

:::

## Switching off the machine

Your virtual machine will keep running for 48 hours if you are doing nothing. You can disconnect from Chrome, turn your laptop off, and then you will be straight back into the exact same machine when you connect again (within 48h). If you have Linux jobs running, the machine will keep going while these run (however long) plus another 48h.

:::warning

Keeping machine running in the background costs money. So **please actively shutdown (if you do not need the extra 48h) using the little off button on the bottom of the side menu.**

:::


