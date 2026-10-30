import { describe, expect, it } from 'vitest';
import { getProjectInfo } from '../src/index.js';

describe('Phase 0: Project Scaffold Smoke Test', () => {
  it('returns ready state for BASWiki', () => {
    const info = getProjectInfo();
    expect(info.name).toBe('BASWiki');
    expect(info.ready).toBe(true);
  });
});
