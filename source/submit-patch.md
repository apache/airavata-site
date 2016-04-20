---
layout: page
id: submit-patch
title: Submit Patch
---

<ul>
<li>Identify an issue or documentation that you want to fix or improve</li>
<li>Search <a href="https://issues.apache.org/jira/browse/airavata">JIRA</a> and the mailing list to see if it’s already been discussed</li>
<li>If it’s a bug or a feature request, open a JIRA issue</li>
<li>Create a sample that you can use for prototyping the feature or demonstrating the bug. If creating a sample is time consuming, write steps to reproduce the issue.</li>
<li>Attach this sample to the JIRA issue if it’s representing a bug report.</li>
<li>Setup a svn client in your system.</li>
<li><a href="source.html">Checkout</a> the source code.</li>
<li>Make your changes</li>
<li>Create the patch:<ul>
<li>svn add any_files_you_added</li>
<li>svn diff &gt; /tmp/fix-AIRAVATA-NNNN.patch</li>
</ul>
</li>
<li>Attach that file (/tmp/fix-AIRAVATA-NNNN.patch) to the JIRA</li>
</ul>