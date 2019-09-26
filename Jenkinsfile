pipeline {
  environment {
    registry = "mrchethan/nodeex"
    registryCredential = 'dockerhub'
    dockerImage = ''
  }
  agent any
  stages {
    stage('Cloning Git') {
      steps {
        git 'https://github.com/chethan-c/node_ex.git'
      }
    }
    stage('Building image') {
      steps{
        script {
          dockerImage = docker.build registry + ":$BUILD_NUMBER"
        }
      }
    }
    stage('Push Image to Registry') {
      steps{
        script {
          docker.withRegistry( '', registryCredential ) {
          dockerImage.push()
          }
        }
      }
    }
    // stage('Remove Unused docker image') {
    //   steps{
    //     sh "docker rmi $registry:$BUILD_NUMBER"
    //   }
    // }
    stage('Stop the container') {
      steps{
        sh "sudo docker stop playjenkins"
      }
    }
    stage('Remove the container') {
      steps{
        sh "sudo docker rm playjenkins"
      }
    }
    stage('Start the container') {
      steps{
        sh "sudo docker run --name playjenkins -p 8181:8181 -d $registry:$BUILD_NUMBER"
      }
    }
  }
}