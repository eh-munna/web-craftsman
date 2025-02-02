{
  // Conditional Types

  type Vehicles = 'car' | 'bike' | 'train';

  type VehicleInfo<T> = T extends Vehicles ? true : false;

  type HasCar = VehicleInfo<'bike'>;
}
