/*
 * Copyright The OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import { MetricExporter, MetricRecord } from '@opentelemetry/metrics';
import { CollectorExporterBase } from './CollectorExporterBase';
import { CollectorExporterConfigBase } from './types';

const DEFAULT_SERVICE_NAME = 'collector-metric-exporter';

/**
 * Collector Metric Exporter abstract base class
 */
export abstract class CollectorMetricExporterBase<
  T extends CollectorExporterConfigBase
> extends CollectorExporterBase<CollectorExporterConfigBase, MetricRecord>
  implements MetricExporter {
  constructor(config: T = {} as T) {
    config.serviceName = config.serviceName || DEFAULT_SERVICE_NAME;
    super(config);
  }
}
