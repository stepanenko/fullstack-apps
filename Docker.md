
### DOCKER

## Container
Container is simply another process on your machine that has been isolated from all other processes on the host machine.
That isolation leverages kernel namespaces and cgroups. You can start a container based on the images you build.
Running a container launches your application with private resources, securely isolated from the rest of your machine.

## Container Image
When running a container, it uses an isolated filesystem. This custom filesystem is provided by a container image.
Since the image contains the container's filesystem, it must contain everything needed to run an application - all dependencies,
configuration, scripts, binaries, environment variables, a default command to run, and other metadata.
Docker image is a private file system just for your container and it provides all the files and code your container needs.

## Sharing
You can save and share your image on Docker Hub to enable other users to easily download and run the image on any destination machine.
