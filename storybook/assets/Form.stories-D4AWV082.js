import{j as e}from"./iframe-Dnj0zt3A.js";import{$ as c}from"./Form-cFHO0f2E.js";import{G as d}from"./Grid-DsXnxqys.js";import{G as i}from"./GridItem-CuJRXJ2a.js";import{T as t}from"./TextField-Do31TmTM.js";import{S as l}from"./Select-gCv0VFF_.js";import{B as a}from"./Button-D037RcO0.js";import{R as x,a as u}from"./Radio-Dvx7WZWu.js";import{C as I}from"./CheckboxGroup-D8TiCUe0.js";import{C as G}from"./Checkbox-Dd56VKqo.js";import{L as p}from"./ListBoxItem-DHuOqBCU.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-CZ7ujQb6.js";import"./clsx-B-dksMZM.js";import"./useFormValidation-D-Igx394.js";import"./useFocusRing-BJGbDr4g.js";import"./index-BZ5oXR7W.js";import"./index-w9N2b8_o.js";import"./clsx-Ciqy0D92.js";import"./TextFieldBase-BaDdUQno.js";import"./TextField-BwjNd0hQ.js";import"./FieldError-Ds1rpN1P.js";import"./Text-BZcE4PZu.js";import"./Text-CUy2D1XG.js";import"./RSPContexts-CiYHqfM8.js";import"./Group-CIHVUO1c.js";import"./Input-U8DVOMOI.js";import"./Hidden-BdPJwGeM.js";import"./Button-BEMXi9hp.js";import"./useLabels-DPkdJjpB.js";import"./useButton-DXRKrxCT.js";import"./useTextField-CyCzrgJR.js";import"./useControlledState-BLnkZwm8.js";import"./useField-BagSvq-O.js";import"./TextField.module-1-_3qsJZ.js";import"./Label-7diI1UcW.js";import"./Dialog-tO2RZT7d.js";import"./OverlayArrow-CFaynpEm.js";import"./useResizeObserver--nBot81v.js";import"./Collection-CG7PYTDM.js";import"./index-CLdXDaJ0.js";import"./Separator-CUD5gTMq.js";import"./SelectionManager-BjshcM7f.js";import"./useEvent-nNccmmdj.js";import"./scrollIntoView-D8GpqHqj.js";import"./SelectionIndicator-ZZ1g1Bvd.js";import"./useDescription-BuSTaiIN.js";import"./ListKeyboardDelegate-BhP_UMyo.js";import"./PressResponder-BMPDHw7_.js";import"./useLocalizedStringFormatter-B0e0Ob-A.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./getScrollParent-BUEVh28_.js";import"./VisuallyHidden-OA8MFr3H.js";import"./useLocalizedStringFormatter-7drUIReq.js";import"./x-DsZiGScE.js";import"./createLucideIcon-2omQZeFD.js";import"./Heading-B3Ef_nQn.js";import"./info-R0mXtk23.js";import"./Popover-DMYBnjwV.js";import"./intlStrings-ZMTSFH_M.js";import"./ListBox-CEXwqJ-L.js";import"./DragAndDrop-EIcVRNfb.js";import"./inertValue-Dq8mbhJC.js";import"./useListState-fBEWa9MW.js";import"./Tag-BJYw-eBo.js";import"./useHighlightSelectionDescription-C_cxGdXE.js";import"./useUpdateEffect-DU4MYCyz.js";import"./useHasTabbableChild-xCdgA-HQ.js";import"./chevron-down-BpUHAjyY.js";import"./Button.module-CtQ1deO8.js";import"./check-D48QaGCX.js";import"./useToggleState-TkCurNCf.js";import"./Virtualizer-133CK6Sw.js";const Xe={component:c,title:"Examples/Form",tags:["autodocs"],argTypes:{}},o={args:{},render:()=>{const m=["Banan","Apple","Mango"];return e.jsxs(d,{children:[e.jsx(i,{size:12,children:e.jsx(t,{label:"Ange ditt fullständiga namn",description:"Glöm inte dina eventuella mellannamn!"})}),e.jsx(i,{size:12,children:e.jsx(t,{label:"Personnummmer",description:"Anges på formen ÅÅMMDD-XXXX"})}),e.jsx(i,{size:12,children:e.jsx(l,{label:"Vilken är din favoritfrukt",placeholder:"Välj en frukt",selectionMode:"single",items:m.map(r=>({id:r,name:r})),children:r=>e.jsx(p,{...r,children:r.name})})}),e.jsx(i,{children:e.jsx(a,{children:"Skicka"})})]})}},s={args:{},render:()=>{const m=["A","B","C"],r=["Anledning A","Anledning B","Anledning C"];return e.jsx("div",{children:e.jsxs(d,{children:[e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(x,{label:"Anledning",description:"Ange anledning till att du söker i databasen",children:r.map(n=>e.jsx(u,{value:n,children:n},n))})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(I,{label:"Databas",description:"Välj databas att söka i",children:m.map(n=>e.jsx(G,{value:n,children:n},n))})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Namn",description:""})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Personnummer"})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(l,{label:"Kön",description:"Kan lämnas tomt",placeholder:"Välj kön",selectionMode:"single",items:m.map(n=>({name:n,id:n})),children:n=>e.jsx(p,{...n,children:n.name})})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Ärendekod"})}),e.jsx(i,{size:"auto",children:e.jsx(a,{children:"Sök"})}),e.jsx(i,{size:"auto",children:e.jsx(a,{variant:"secondary",children:"Rensa"})})]})})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
