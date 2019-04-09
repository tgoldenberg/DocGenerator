const sections = [
  {
    title: 'Overview',
    pages: [
      'https://hadoop.apache.org/docs/current/',
      'https://hadoop.apache.org/docs/current/hadoop-project-dist/hadoop-common/SingleCluster.html',
      'https://hadoop.apache.org/docs/current/hadoop-project-dist/hadoop-common/ClusterSetup.html',
      'https://hadoop.apache.org/docs/current/hadoop-project-dist/hadoop-common/CommandsManual.html',
      'https://hadoop.apache.org/docs/current/hadoop-project-dist/hadoop-common/FileSystemShell.html',
      'https://hadoop.apache.org/docs/current/hadoop-project-dist/hadoop-common/Compatibility.html',
      'https://hadoop.apache.org/docs/current/hadoop-project-dist/hadoop-common/InterfaceClassification.html',
      'https://hadoop.apache.org/docs/current/hadoop-project-dist/hadoop-common/filesystem/index.html',
      'https://hadoop.apache.org/docs/current/hadoop-project-dist/hadoop-common/filesystem/introduction.html',
      'https://hadoop.apache.org/docs/current/hadoop-project-dist/hadoop-common/filesystem/notation.html',
      'https://hadoop.apache.org/docs/current/hadoop-project-dist/hadoop-common/filesystem/model.html',
      'https://hadoop.apache.org/docs/current/hadoop-project-dist/hadoop-common/filesystem/filesystem.html',
      'https://hadoop.apache.org/docs/current/hadoop-project-dist/hadoop-common/filesystem/fsdatainputstream.html',
      'https://hadoop.apache.org/docs/current/hadoop-project-dist/hadoop-common/filesystem/testing.html',
      'https://hadoop.apache.org/docs/current/hadoop-project-dist/hadoop-common/filesystem/extending.html',
    ]
  },
  {
    title: 'Common',
    pages: [
      'https://hadoop.apache.org/docs/current/hadoop-project-dist/hadoop-common/CLIMiniCluster.html',
      'https://hadoop.apache.org/docs/current/hadoop-project-dist/hadoop-common/NativeLibraries.html',
      'https://hadoop.apache.org/docs/current/hadoop-project-dist/hadoop-common/Superusers.html',
      'https://hadoop.apache.org/docs/current/hadoop-project-dist/hadoop-common/RackAwareness.html',
      'https://hadoop.apache.org/docs/current/hadoop-project-dist/hadoop-common/SecureMode.html',
      'https://hadoop.apache.org/docs/current/hadoop-project-dist/hadoop-common/ServiceLevelAuth.html',
      'https://hadoop.apache.org/docs/current/hadoop-project-dist/hadoop-common/HttpAuthentication.html',
      'https://hadoop.apache.org/docs/current/hadoop-project-dist/hadoop-common/CredentialProviderAPI.html',
      'https://hadoop.apache.org/docs/current/hadoop-kms/index.html',
      'https://hadoop.apache.org/docs/current/hadoop-project-dist/hadoop-common/Tracing.html',
    ]
  },
  {
    title: 'HDFS',
    pages: [
      'https://hadoop.apache.org/docs/current/hadoop-project-dist/hadoop-hdfs/HdfsDesign.html',
      'https://hadoop.apache.org/docs/current/hadoop-project-dist/hadoop-hdfs/HdfsUserGuide.html',
      'https://hadoop.apache.org/docs/current/hadoop-project-dist/hadoop-hdfs/HDFSCommands.html',
      'https://hadoop.apache.org/docs/current/hadoop-project-dist/hadoop-hdfs/HDFSHighAvailabilityWithQJM.html',
      'https://hadoop.apache.org/docs/current/hadoop-project-dist/hadoop-hdfs/HDFSHighAvailabilityWithNFS.html',
      'https://hadoop.apache.org/docs/current/hadoop-project-dist/hadoop-hdfs/Federation.html',
      'https://hadoop.apache.org/docs/current/hadoop-project-dist/hadoop-hdfs/ViewFs.html',
      'https://hadoop.apache.org/docs/current/hadoop-project-dist/hadoop-hdfs/HdfsSnapshots.html',
      'https://hadoop.apache.org/docs/current/hadoop-project-dist/hadoop-hdfs/HdfsEditsViewer.html',
      'https://hadoop.apache.org/docs/current/hadoop-project-dist/hadoop-hdfs/HdfsImageViewer.html',
      'https://hadoop.apache.org/docs/current/hadoop-project-dist/hadoop-hdfs/HdfsPermissionsGuide.html',
      'https://hadoop.apache.org/docs/current/hadoop-project-dist/hadoop-hdfs/HdfsQuotaAdminGuide.html',
      'https://hadoop.apache.org/docs/current/hadoop-project-dist/hadoop-hdfs/Hftp.html',
      'https://hadoop.apache.org/docs/current/hadoop-project-dist/hadoop-hdfs/LibHdfs.html',
      'https://hadoop.apache.org/docs/current/hadoop-project-dist/hadoop-hdfs/WebHDFS.html',
      'https://hadoop.apache.org/docs/current/hadoop-hdfs-httpfs/index.html',
      'https://hadoop.apache.org/docs/current/hadoop-project-dist/hadoop-hdfs/ShortCircuitLocalReads.html',
      'https://hadoop.apache.org/docs/current/hadoop-project-dist/hadoop-hdfs/CentralizedCacheManagement.html',
      'https://hadoop.apache.org/docs/current/hadoop-project-dist/hadoop-hdfs/HdfsNfsGateway.html',
      'https://hadoop.apache.org/docs/current/hadoop-project-dist/hadoop-hdfs/HdfsRollingUpgrade.html',
      'https://hadoop.apache.org/docs/current/hadoop-project-dist/hadoop-hdfs/ExtendedAttributes.html',
      'https://hadoop.apache.org/docs/current/hadoop-project-dist/hadoop-hdfs/TransparentEncryption.html',
      'https://hadoop.apache.org/docs/current/hadoop-project-dist/hadoop-hdfs/HdfsMultihoming.html',
      'https://hadoop.apache.org/docs/current/hadoop-project-dist/hadoop-hdfs/ArchivalStorage.html',
      'https://hadoop.apache.org/docs/current/hadoop-project-dist/hadoop-hdfs/HdfsUpgradeDomain.html',
      'https://hadoop.apache.org/docs/current/hadoop-project-dist/hadoop-hdfs/HdfsDataNodeAdminGuide.html',
      'https://hadoop.apache.org/docs/current/hadoop-project-dist/hadoop-hdfs-rbf/HDFSRouterFederation.html',
    ]
  },
  {
    title: 'MapReduce',
    pages: [
      'https://hadoop.apache.org/docs/current/hadoop-mapreduce-client/hadoop-mapreduce-client-core/MapReduceTutorial.html',
      'https://hadoop.apache.org/docs/current/hadoop-mapreduce-client/hadoop-mapreduce-client-core/MapredCommands.html',
      'https://hadoop.apache.org/docs/current/hadoop-mapreduce-client/hadoop-mapreduce-client-core/MapReduce_Compatibility_Hadoop1_Hadoop2.html',
      'https://hadoop.apache.org/docs/current/hadoop-mapreduce-client/hadoop-mapreduce-client-core/EncryptedShuffle.html',
      'https://hadoop.apache.org/docs/current/hadoop-mapreduce-client/hadoop-mapreduce-client-core/PluggableShuffleAndPluggableSort.html',
      'https://hadoop.apache.org/docs/current/hadoop-mapreduce-client/hadoop-mapreduce-client-core/DistributedCacheDeploy.html',
      'https://hadoop.apache.org/docs/current/hadoop-mapreduce-client/hadoop-mapreduce-client-core/SharedCacheSupport.html'
    ]
  },
  {
    title: 'Yarn',
    pages: [
      'https://hadoop.apache.org/docs/current/hadoop-yarn/hadoop-yarn-site/YARN.html',
      'https://hadoop.apache.org/docs/current/hadoop-yarn/hadoop-yarn-site/YarnCommands.html',
      'https://hadoop.apache.org/docs/current/hadoop-yarn/hadoop-yarn-site/CapacityScheduler.html',
      'https://hadoop.apache.org/docs/current/hadoop-yarn/hadoop-yarn-site/FairScheduler.html',
      'https://hadoop.apache.org/docs/current/hadoop-yarn/hadoop-yarn-site/ResourceManagerRestart.html',
      'https://hadoop.apache.org/docs/current/hadoop-yarn/hadoop-yarn-site/ResourceManagerHA.html',
      'https://hadoop.apache.org/docs/current/hadoop-yarn/hadoop-yarn-site/NodeLabel.html',
      'https://hadoop.apache.org/docs/current/hadoop-yarn/hadoop-yarn-site/WebApplicationProxy.html',
      'https://hadoop.apache.org/docs/current/hadoop-yarn/hadoop-yarn-site/TimelineServer.html',
      'https://hadoop.apache.org/docs/current/hadoop-yarn/hadoop-yarn-site/TimelineServiceV2.html',
      'https://hadoop.apache.org/docs/current/hadoop-yarn/hadoop-yarn-site/WritingYarnApplications.html',
      'https://hadoop.apache.org/docs/current/hadoop-yarn/hadoop-yarn-site/YarnApplicationSecurity.html',
      'https://hadoop.apache.org/docs/current/hadoop-yarn/hadoop-yarn-site/NodeManager.html',
      'https://hadoop.apache.org/docs/current/hadoop-yarn/hadoop-yarn-site/DockerContainerExecutor.html',
      'https://hadoop.apache.org/docs/current/hadoop-yarn/hadoop-yarn-site/DockerContainers.html',
      'https://hadoop.apache.org/docs/current/hadoop-yarn/hadoop-yarn-site/NodeManagerCgroups.html',
      'https://hadoop.apache.org/docs/current/hadoop-yarn/hadoop-yarn-site/SecureContainer.html',
      'https://hadoop.apache.org/docs/current/hadoop-yarn/hadoop-yarn-site/registry/index.html',
      'https://hadoop.apache.org/docs/current/hadoop-yarn/hadoop-yarn-site/ReservationSystem.html',
      'https://hadoop.apache.org/docs/current/hadoop-yarn/hadoop-yarn-site/GracefulDecommission.html',
      'https://hadoop.apache.org/docs/current/hadoop-yarn/hadoop-yarn-site/OpportunisticContainers.html',
      'https://hadoop.apache.org/docs/current/hadoop-yarn/hadoop-yarn-site/Federation.html',
      'https://hadoop.apache.org/docs/current/hadoop-yarn/hadoop-yarn-site/SharedCache.html',
    ]
  },
  {
    title: 'Yarn REST APIs',
    pages: [
      'https://hadoop.apache.org/docs/current/hadoop-yarn/hadoop-yarn-site/WebServicesIntro.html',
      'https://hadoop.apache.org/docs/current/hadoop-yarn/hadoop-yarn-site/ResourceManagerRest.html',
      'https://hadoop.apache.org/docs/current/hadoop-yarn/hadoop-yarn-site/NodeManagerRest.html',
      'https://hadoop.apache.org/docs/current/hadoop-yarn/hadoop-yarn-site/TimelineServer.html#Timeline_Server_REST_API_v1',
      'https://hadoop.apache.org/docs/current/hadoop-yarn/hadoop-yarn-site/TimelineServiceV2.html#Timeline_Service_v.2_REST_API',
    ]
  },
  {
    title: 'Integration',
    pages: [
      'https://hadoop.apache.org/docs/current/hadoop-aws/tools/hadoop-aws/index.html',
      'https://hadoop.apache.org/docs/current/hadoop-azure/index.html',
      'https://hadoop.apache.org/docs/current/hadoop-openstack/index.html',
    ]
  },
  {
    title: 'Auth',
    pages: [
      'https://hadoop.apache.org/docs/current/hadoop-auth/index.html',
      'https://hadoop.apache.org/docs/current/hadoop-auth/Examples.html',
      'https://hadoop.apache.org/docs/current/hadoop-auth/Configuration.html',
      'https://hadoop.apache.org/docs/current/hadoop-auth/BuildingIt.html',
    ]
  },
  {
    title: 'Tools',
    pages: [
      'https://hadoop.apache.org/docs/current/hadoop-streaming/HadoopStreaming.html',
      'https://hadoop.apache.org/docs/current/hadoop-archives/HadoopArchives.html',
      'https://hadoop.apache.org/docs/current/hadoop-archive-logs/HadoopArchiveLogs.html',
      'https://hadoop.apache.org/docs/current/hadoop-distcp/DistCp.html',
      'https://hadoop.apache.org/docs/current/hadoop-gridmix/GridMix.html',
      'https://hadoop.apache.org/docs/current/hadoop-rumen/Rumen.html',
      'https://hadoop.apache.org/docs/current/hadoop-resourceestimator/ResourceEstimator.html',
      'https://hadoop.apache.org/docs/current/hadoop-sls/SchedulerLoadSimulator.html',
      'https://hadoop.apache.org/docs/current/hadoop-project-dist/hadoop-common/Benchmarking.html',
    ]
  },
  {
    title: 'API Docs',
    pages: [
      'https://hadoop.apache.org/docs/current/api/index.html',
    ]
  }
];

module.exports = sections;
