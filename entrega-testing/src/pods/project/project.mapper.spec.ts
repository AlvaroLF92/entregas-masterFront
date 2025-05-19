import * as collectionMappers from '#common/mappers';
import * as apiModel from './api/project.api-model';
import * as viewModel from './project.vm';
import { mapProjectFromApiToVm } from './project.mapper';

describe('project.mapper - mapProjectFromApiToVm', () => {
  let apiProject: apiModel.Project;

  beforeEach(() => {
    // Arrange - datos base que reutilizamos en cada test
    apiProject = {
      id: '1',
      name: 'Project A',
      externalId: 'EXT123',
      comments: 'Some comments',
      isActive: true,
      employees: [
        {
          id: 'e1',
          isAssigned: true,
          employeeName: 'John Doe',
        },
        {
          id: 'e2',
          isAssigned: false,
          employeeName: 'Jane Smith',
        },
      ],
    };

    // Restaurar mocks automáticos (por si acaso)
    vi.restoreAllMocks();
  });

  it('should map a full project correctly', () => {
    // Arrange
    vi.spyOn(collectionMappers, 'mapToCollection').mockReturnValue(apiProject.employees);

    // Act
    const result = mapProjectFromApiToVm(apiProject);

    // Assert
    expect(result).toEqual({
      ...apiProject,
      employees: apiProject.employees,
    });
  });

  it('should return empty project when input is null', () => {
    // Act
    const result = mapProjectFromApiToVm(null);

    // Assert
    expect(result).toEqual(viewModel.createEmptyProject());
  });

  it('should return empty project when input is undefined', () => {
    // Act
    const result = mapProjectFromApiToVm(undefined);

    // Assert
    expect(result).toEqual(viewModel.createEmptyProject());
  });

  it('should map employees to empty array if employees is empty', () => {
    // Arrange

    const emptyEmployeesProject: apiModel.Project = {
      ...apiProject,
      employees: [],
    };

    // Act
    const result = mapProjectFromApiToVm(emptyEmployeesProject);

    // Assert
    expect(result.employees).toEqual([]);
  });

});
