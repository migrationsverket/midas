import{j as e}from"./iframe-BGGCyDgM.js";import{$ as c}from"./Form-C0kbRUma.js";import{G as d}from"./Grid-Bnl3QE-N.js";import{G as i}from"./GridItem-CudfhEMi.js";import{T as t}from"./TextField-C5972Abr.js";import{S as l}from"./Select-cUbGl-LV.js";import{B as a}from"./Button-CbQXvBqq.js";import{R as x,a as u}from"./Radio-yst3T0YN.js";import{C as I}from"./CheckboxGroup-ufAO6et3.js";import{C as G}from"./Checkbox-Bgf_RW4q.js";import{L as p}from"./ListBoxItem-DB5u1MrR.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-DO-F69_Y.js";import"./clsx-B-dksMZM.js";import"./useFormValidation-FPzZWdfk.js";import"./useFocusRing-CgXHCqVS.js";import"./index-D897gEwO.js";import"./index-B5Wjey1h.js";import"./clsx-Ciqy0D92.js";import"./TextFieldBase-QwcEc5A3.js";import"./TextField-CSIdvX37.js";import"./FieldError-Dl2BDJut.js";import"./Text-eYsAB99o.js";import"./Text-f8Fpe_5q.js";import"./RSPContexts-DD_BGhEj.js";import"./Group-DXxuXbTg.js";import"./Input-BdesbQvk.js";import"./Hidden-C8IUZiWg.js";import"./Button-Cx7yfezp.js";import"./useLabels-BYquqqxS.js";import"./useButton-BLQQLHjW.js";import"./useTextField-J3PSPvGh.js";import"./useControlledState-B0GTzqoE.js";import"./useField-7woY0xAJ.js";import"./TextField.module-CgqiUiYQ.js";import"./Label-O0l3StCg.js";import"./Dialog-DXx9JGxU.js";import"./OverlayArrow-BEwPagYl.js";import"./useResizeObserver-CMmR615Z.js";import"./Collection-CQwjMubf.js";import"./index-JLP76Q_E.js";import"./Separator-OnEnhmwE.js";import"./SelectionManager-Bp0yhV_i.js";import"./useEvent-DqUhpkp2.js";import"./scrollIntoView-CtWAMHuk.js";import"./SelectionIndicator-DurNKVRD.js";import"./useDescription-DxzFv_6R.js";import"./ListKeyboardDelegate-jAlOM_cw.js";import"./PressResponder-BLVphphK.js";import"./useLocalizedStringFormatter-DTenb4Ru.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-D3jFfyUz.js";import"./getScrollParent-Cpn7MDkE.js";import"./VisuallyHidden-i3QblTNI.js";import"./x-DG2uGBCX.js";import"./createLucideIcon-DYtt1YAX.js";import"./useLocalizedStringFormatter-BEbUSZ1g.js";import"./Heading-C52-gJ0N.js";import"./info-BTZWfK7c.js";import"./Popover-BoKhiQsj.js";import"./intlStrings-ZMTSFH_M.js";import"./ListBox-CYBb64dg.js";import"./DragAndDrop-CWKkb0sv.js";import"./inertValue-BI4SGGu7.js";import"./useListState-URLH-6CS.js";import"./Tag-zmzyVxxi.js";import"./useHighlightSelectionDescription-DKdF4Sft.js";import"./useUpdateEffect-B2eUsUgl.js";import"./useHasTabbableChild-5yDRh5nv.js";import"./chevron-down-C8cwcIP-.js";import"./Button.module-Co5e5YHp.js";import"./check-BiWd66dR.js";import"./useToggleState-cWK0B-8R.js";import"./Virtualizer-BjD-gWey.js";const Le={component:c,title:"Examples/Form",tags:["autodocs"],argTypes:{}},o={args:{},render:()=>{const m=["Banan","Apple","Mango"];return e.jsxs(d,{children:[e.jsx(i,{size:12,children:e.jsx(t,{label:"Ange ditt fullständiga namn",description:"Glöm inte dina eventuella mellannamn!"})}),e.jsx(i,{size:12,children:e.jsx(t,{label:"Personnummmer",description:"Anges på formen ÅÅMMDD-XXXX"})}),e.jsx(i,{size:12,children:e.jsx(l,{label:"Vilken är din favoritfrukt",placeholder:"Välj en frukt",selectionMode:"single",items:m.map(r=>({id:r,name:r})),children:r=>e.jsx(p,{...r,children:r.name})})}),e.jsx(i,{children:e.jsx(a,{children:"Skicka"})})]})}},s={args:{},render:()=>{const m=["A","B","C"],r=["Anledning A","Anledning B","Anledning C"];return e.jsx("div",{children:e.jsxs(d,{children:[e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(x,{label:"Anledning",description:"Ange anledning till att du söker i databasen",children:r.map(n=>e.jsx(u,{value:n,children:n},n))})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(I,{label:"Databas",description:"Välj databas att söka i",children:m.map(n=>e.jsx(G,{value:n,children:n},n))})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Namn",description:""})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Personnummer"})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(l,{label:"Kön",description:"Kan lämnas tomt",placeholder:"Välj kön",selectionMode:"single",items:m.map(n=>({name:n,id:n})),children:n=>e.jsx(p,{...n,children:n.name})})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Ärendekod"})}),e.jsx(i,{size:"auto",children:e.jsx(a,{children:"Sök"})}),e.jsx(i,{size:"auto",children:e.jsx(a,{variant:"secondary",children:"Rensa"})})]})})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {},
  render: () => {
    const ITEMS = ['Banan', 'Apple', 'Mango'];
    return <Grid>
        <GridItem size={12}>
          <TextField label='Ange ditt fullständiga namn' description='Glöm inte dina eventuella mellannamn!' />
        </GridItem>
        <GridItem size={12}>
          <TextField label='Personnummmer' description='Anges på formen ÅÅMMDD-XXXX' />
        </GridItem>
        <GridItem size={12}>
          <Select label='Vilken är din favoritfrukt' placeholder='Välj en frukt' selectionMode='single' items={ITEMS.map(i => ({
          id: i,
          name: i
        }))}>
            {item => <ListBoxItem {...item}>{item.name}</ListBoxItem>}
          </Select>
        </GridItem>

        <GridItem>
          <Button>Skicka</Button>
        </GridItem>
      </Grid>;
  }
}`,...o.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {},
  render: () => {
    const ITEMS = ['A', 'B', 'C'];
    const RADIOITEMS = ['Anledning A', 'Anledning B', 'Anledning C'];
    return <div>
        <Grid>
          <GridItem size={{
          xs: 12,
          sm: 6
        }}>
            <RadioGroup label='Anledning' description='Ange anledning till att du söker i databasen'>
              {RADIOITEMS.map((item: string) => <Radio value={item} key={item}>
                  {item}
                </Radio>)}
            </RadioGroup>
          </GridItem>
          <GridItem size={{
          xs: 12,
          sm: 6
        }}>
            <CheckboxGroup label='Databas' description='Välj databas att söka i'>
              {ITEMS.map((item: string) => <Checkbox value={item} key={item}>
                  {item}
                </Checkbox>)}
            </CheckboxGroup>
          </GridItem>
          <GridItem size={{
          xs: 12,
          sm: 6
        }}>
            <TextField label='Namn' description='' />
          </GridItem>
          <GridItem size={{
          xs: 12,
          sm: 6
        }}>
            <TextField label='Personnummer' />
          </GridItem>

          <GridItem size={{
          xs: 12,
          sm: 6
        }}>
            <Select label='Kön' description='Kan lämnas tomt' placeholder='Välj kön' selectionMode='single' items={ITEMS.map(i => ({
            name: i,
            id: i
          }))}>
              {item => <ListBoxItem {...item}>{item.name}</ListBoxItem>}
            </Select>
          </GridItem>
          <GridItem size={{
          xs: 12,
          sm: 6
        }}>
            <TextField label='Ärendekod' />
          </GridItem>

          <GridItem size='auto'>
            <Button>Sök</Button>
          </GridItem>
          <GridItem size='auto'>
            <Button variant='secondary'>Rensa</Button>
          </GridItem>
        </Grid>
      </div>;
  }
}`,...s.parameters?.docs?.source}}};const ye=["SimpleForm","TwoColumnForm"];export{o as SimpleForm,s as TwoColumnForm,ye as __namedExportsOrder,Le as default};
