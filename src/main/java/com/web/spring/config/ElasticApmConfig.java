package com.web.spring.config;

import co.elastic.apm.attach.ElasticApmAttacher;
import org.springframework.boot.autoconfigure.condition.ConditionalOnProperty;
import org.springframework.boot.context.properties.ConfigurationProperties;
import org.springframework.context.annotation.Configuration;

import javax.annotation.PostConstruct;
import java.util.HashMap;
import java.util.Map;

@Configuration
@ConfigurationProperties(prefix = "elastic.apm")
@ConditionalOnProperty(value = "elastic.apm.enabled", havingValue = "true")
public class ElasticApmConfig {

	 private static final String SERVER_URL_KEY = "server_url";
	    private String serverUrl;

	    private static final String SERVICE_NAME_KEY = "service_name";
	    private String serviceName;

	    private static final String ENVIRONMENT_KEY = "environment";
	    private String environment;

	    private static final String APPLICATION_PACKAGES_KEY = "application_packages";
	    private String applicationPackages;

	    private static final String LOG_LEVEL_KEY = "log_level";
	    private String logLevel;
	    
	    private static final String SERVER_CERT = "verify_server_cert";
	    private String verify_server_cert;
	    
	    private static final String LOG_CORRELATION = "enable_log_correlation";
	    public String enable_log_correlation;
	    
	    
	    @PostConstruct
	    public void init() {

	        Map<String, String> apmProps = new HashMap<>(6);
	        apmProps.put(SERVER_URL_KEY, serverUrl);
	        apmProps.put(SERVICE_NAME_KEY, serviceName);
	        apmProps.put(ENVIRONMENT_KEY, environment);
	        apmProps.put(APPLICATION_PACKAGES_KEY, applicationPackages);
	        apmProps.put(LOG_LEVEL_KEY, logLevel);
			apmProps.put(SERVER_CERT, verify_server_cert);
			apmProps.put(LOG_CORRELATION, enable_log_correlation);
	        ElasticApmAttacher.attach(apmProps);
	    }


		public String getEnable_log_correlation() {
			return enable_log_correlation;
		}


		public void setEnable_log_correlation(String enable_log_correlation) {
			this.enable_log_correlation = enable_log_correlation;
		}


		public static String getLogCorrelation() {
			return LOG_CORRELATION;
		}


		public String getVerify_server_cert() {
			return verify_server_cert;
		}


		public void setVerify_server_cert(String verify_server_cert) {
			this.verify_server_cert = verify_server_cert;
		}


		public static String getServerCert() {
			return SERVER_CERT;
		}


		public String getServerUrl() {
			return serverUrl;
		}

		public void setServerUrl(String serverUrl) {
			this.serverUrl = serverUrl;
		}

		public String getServiceName() {
			return serviceName;
		}


		public void setServiceName(String serviceName) {
			this.serviceName = serviceName;
		}

		public String getEnvironment() {
			return environment;
		}

		public void setEnvironment(String environment) {
			this.environment = environment;
		}

		public String getApplicationPackages() {
			return applicationPackages;
		}

		public void setApplicationPackages(String applicationPackages) {
			this.applicationPackages = applicationPackages;
		}

		public String getLogLevel() {
			return logLevel;
		}

		public void setLogLevel(String logLevel) {
			this.logLevel = logLevel;
		}

		public static String getServerUrlKey() {
			return SERVER_URL_KEY;
		}

		public static String getServiceNameKey() {
			return SERVICE_NAME_KEY;
		}

		public static String getEnvironmentKey() {
			return ENVIRONMENT_KEY;
		}

		public static String getApplicationPackagesKey() {
			return APPLICATION_PACKAGES_KEY;
		}

		public static String getLogLevelKey() {
			return LOG_LEVEL_KEY;
		}
	}