import{j as e}from"./iframe-CaGxyJQ5.js";import{$ as c}from"./Form-Cfd2cFqg.js";import{G as d}from"./Grid-D05nnsV6.js";import{G as i}from"./GridItem-Bv1gKnai.js";import{a as x,R as u}from"./Radio-6N3Lo_FT.js";import{C as I}from"./CheckboxGroup-Cy2HI8Gq.js";import{C as G}from"./Checkbox-DsP29CQ3.js";import{T as t}from"./TextField-DMOUSgzB.js";import{S as l}from"./Select-Bwy9w1Bc.js";import{L as p}from"./ListBoxItem-BwWSfqoP.js";import{B as a}from"./Button-SlKntRzd.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-CVJqKyu4.js";import"./clsx-B-dksMZM.js";import"./useFormValidation-tvbfblk7.js";import"./useFocusRing-LTUTFWnB.js";import"./index-K3VTbzXg.js";import"./index-DRbza-0A.js";import"./clsx-Ciqy0D92.js";import"./Group-BHO6bdai.js";import"./FieldError-BBlPKEY6.js";import"./Text-Dtkx7GWh.js";import"./Text-W3mtiTBT.js";import"./Button-Bn3l1eKL.js";import"./Hidden-BAAaulvK.js";import"./useLabels-BlAPVOi_.js";import"./useButton-bmkikoqa.js";import"./SelectionIndicator-DM64-xB3.js";import"./useField-DTyiot4U.js";import"./VisuallyHidden-BZzDvx5i.js";import"./useControlledState-CNCDq7j0.js";import"./Label-CKj8R9kJ.js";import"./Dialog-DLxW7KLT.js";import"./RSPContexts-_cn7M6Ef.js";import"./OverlayArrow-CBy4nJZJ.js";import"./useResizeObserver-CpKOmDlM.js";import"./Collection-CE0nJlW6.js";import"./index-Bx7R-ad4.js";import"./Separator-D2pJZkcF.js";import"./SelectionManager-DzE4SKgf.js";import"./useEvent-CzPSy7Rs.js";import"./scrollIntoView-yBkYCpPJ.js";import"./useDescription-BuSKxMJt.js";import"./ListKeyboardDelegate-DNfzS-AW.js";import"./PressResponder-HiCvM10K.js";import"./useLocalizedStringFormatter-CZOLyc3D.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-BXHwBS7q.js";import"./getScrollParent-B1-aYvPm.js";import"./x-CBNTpHd8.js";import"./createLucideIcon-yEXXgYRp.js";import"./useLocalizedStringFormatter-DdAzyJ4I.js";import"./Heading-UtCJNKfQ.js";import"./info-Cl6QVS6K.js";import"./Popover-CphyAV3g.js";import"./check-BU161kP0.js";import"./useToggleState-TxwGpfk5.js";import"./TextFieldBase-DHp0nXlk.js";import"./Input-CcdY3WN8.js";import"./useTextField-BxWPDhyK.js";import"./TextField.module-DdivwlC8.js";import"./intlStrings-ZMTSFH_M.js";import"./ListBox-F05OiLWH.js";import"./DragAndDrop-NKVGIY_C.js";import"./inertValue-DmdUGOcl.js";import"./useListState-C3K54ykJ.js";import"./TagGroup-EjqwIvUR.js";import"./useHighlightSelectionDescription-DrOWlOoz.js";import"./useUpdateEffect-QsPXsxHy.js";import"./useHasTabbableChild-D16MoY09.js";import"./chevron-down-DBoIkXUd.js";import"./Virtualizer-CbX4EwV-.js";import"./Button.module-BB7N-cLd.js";const Xe={component:c,title:"Examples/Form",tags:["autodocs"],argTypes:{}},o={args:{},render:()=>{const m=["Banan","Apple","Mango"];return e.jsxs(d,{children:[e.jsx(i,{size:12,children:e.jsx(t,{label:"Ange ditt fullständiga namn",description:"Glöm inte dina eventuella mellannamn!"})}),e.jsx(i,{size:12,children:e.jsx(t,{label:"Personnummmer",description:"Anges på formen ÅÅMMDD-XXXX"})}),e.jsx(i,{size:12,children:e.jsx(l,{label:"Vilken är din favoritfrukt",placeholder:"Välj en frukt",selectionMode:"single",items:m.map(r=>({id:r,name:r})),children:r=>e.jsx(p,{...r,children:r.name})})}),e.jsx(i,{children:e.jsx(a,{children:"Skicka"})})]})}},s={args:{},render:()=>{const m=["A","B","C"],r=["Anledning A","Anledning B","Anledning C"];return e.jsx("div",{children:e.jsxs(d,{children:[e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(x,{label:"Anledning",description:"Ange anledning till att du söker i databasen",children:r.map(n=>e.jsx(u,{value:n,children:n},n))})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(I,{label:"Databas",description:"Välj databas att söka i",children:m.map(n=>e.jsx(G,{value:n,children:n},n))})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Namn",description:""})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Personnummer"})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(l,{label:"Kön",description:"Kan lämnas tomt",placeholder:"Välj kön",selectionMode:"single",items:m.map(n=>({name:n,id:n})),children:n=>e.jsx(p,{...n,children:n.name})})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Ärendekod"})}),e.jsx(i,{size:"auto",children:e.jsx(a,{children:"Sök"})}),e.jsx(i,{size:"auto",children:e.jsx(a,{variant:"secondary",children:"Rensa"})})]})})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
}`,...s.parameters?.docs?.source}}};const Le=["SimpleForm","TwoColumnForm"];export{o as SimpleForm,s as TwoColumnForm,Le as __namedExportsOrder,Xe as default};
