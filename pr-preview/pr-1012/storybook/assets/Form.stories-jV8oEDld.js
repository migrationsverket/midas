import{j as e}from"./iframe-qoW9tZaT.js";import{$ as c}from"./Form-BQeevNnQ.js";import{G as d}from"./Grid-Ds415UuZ.js";import{G as i}from"./GridItem-D1G8CvwB.js";import{T as t}from"./TextField-DyM925_5.js";import{S as l}from"./Select-ha241RLu.js";import{B as a}from"./Button-CPAvH5KE.js";import{R as x,a as u}from"./Radio-BzW3b7WU.js";import{C as I}from"./CheckboxGroup-DHc61Aae.js";import{C as G}from"./Checkbox-7jsngdVH.js";import{L as p}from"./ListBoxItem-DcFdVuxe.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-CTxYHgfD.js";import"./clsx-B-dksMZM.js";import"./useFormValidation-BnwIZj_P.js";import"./useFocusRing-B6LARHo7.js";import"./index-bWzt5b9S.js";import"./index-BiO5NgKw.js";import"./clsx-Ciqy0D92.js";import"./TextFieldBase-aAn50tsd.js";import"./TextField-DXLhG8g4.js";import"./FieldError-DE19xuEt.js";import"./Text-DwKAJAla.js";import"./Text-CYhV6FXp.js";import"./RSPContexts-DxChSUOo.js";import"./Group-BUwT5NP3.js";import"./Input-AVWyu6im.js";import"./Hidden-BS4srMlH.js";import"./Button-B0Fu5HXr.js";import"./useLabels-B9eAX_KZ.js";import"./useButton-C2Ne_uvp.js";import"./useTextField-CBwLvLKO.js";import"./useControlledState-C0UVa0XM.js";import"./useField-DngBv23z.js";import"./TextField.module-CgqiUiYQ.js";import"./Label-fjZFM601.js";import"./Dialog-D-9AEPg-.js";import"./OverlayArrow-CCAwihsK.js";import"./useResizeObserver-CjlNJV09.js";import"./Collection-BVbkFK2L.js";import"./index-C0fhMHrq.js";import"./Separator-Cru_BpWB.js";import"./SelectionManager-zjIT78cX.js";import"./useEvent-DDnu5cND.js";import"./scrollIntoView-CtWAMHuk.js";import"./SelectionIndicator-Cy56j8FR.js";import"./useDescription-5krC5hm9.js";import"./ListKeyboardDelegate-C967icmU.js";import"./PressResponder-DHwVYLfF.js";import"./useLocalizedStringFormatter-D4YZU2AG.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-CHc5UgF5.js";import"./getScrollParent-Cpn7MDkE.js";import"./VisuallyHidden-BRq5SFSs.js";import"./x-DguWE13t.js";import"./createLucideIcon-BjNk3Fmr.js";import"./useLocalizedStringFormatter-DZDYT37P.js";import"./Heading-Ds5MlqHc.js";import"./info-Dhd9HzUF.js";import"./Popover-BxOOkRRk.js";import"./intlStrings-ZMTSFH_M.js";import"./ListBox-D6eVTKen.js";import"./DragAndDrop-Dk77kdn2.js";import"./inertValue-Cl9GzEPU.js";import"./useListState-BxKZT4cr.js";import"./Tag-BV6YtXDq.js";import"./useHighlightSelectionDescription-CoRdlbH3.js";import"./useUpdateEffect-DaVeE0I2.js";import"./useHasTabbableChild-_i94kGBb.js";import"./chevron-down-lF-1Wbrl.js";import"./Button.module-Co5e5YHp.js";import"./check-Cwc62J8M.js";import"./useToggleState-CxwX6hE5.js";import"./Virtualizer-Ck0B7Qv7.js";const Le={component:c,title:"Examples/Form",tags:["autodocs"],argTypes:{}},o={args:{},render:()=>{const m=["Banan","Apple","Mango"];return e.jsxs(d,{children:[e.jsx(i,{size:12,children:e.jsx(t,{label:"Ange ditt fullständiga namn",description:"Glöm inte dina eventuella mellannamn!"})}),e.jsx(i,{size:12,children:e.jsx(t,{label:"Personnummmer",description:"Anges på formen ÅÅMMDD-XXXX"})}),e.jsx(i,{size:12,children:e.jsx(l,{label:"Vilken är din favoritfrukt",placeholder:"Välj en frukt",selectionMode:"single",items:m.map(r=>({id:r,name:r})),children:r=>e.jsx(p,{...r,children:r.name})})}),e.jsx(i,{children:e.jsx(a,{children:"Skicka"})})]})}},s={args:{},render:()=>{const m=["A","B","C"],r=["Anledning A","Anledning B","Anledning C"];return e.jsx("div",{children:e.jsxs(d,{children:[e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(x,{label:"Anledning",description:"Ange anledning till att du söker i databasen",children:r.map(n=>e.jsx(u,{value:n,children:n},n))})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(I,{label:"Databas",description:"Välj databas att söka i",children:m.map(n=>e.jsx(G,{value:n,children:n},n))})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Namn",description:""})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Personnummer"})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(l,{label:"Kön",description:"Kan lämnas tomt",placeholder:"Välj kön",selectionMode:"single",items:m.map(n=>({name:n,id:n})),children:n=>e.jsx(p,{...n,children:n.name})})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Ärendekod"})}),e.jsx(i,{size:"auto",children:e.jsx(a,{children:"Sök"})}),e.jsx(i,{size:"auto",children:e.jsx(a,{variant:"secondary",children:"Rensa"})})]})})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
