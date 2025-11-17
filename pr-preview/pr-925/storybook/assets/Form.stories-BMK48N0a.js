import{j as e}from"./iframe-jgKyCgCs.js";import{$ as c}from"./Form-BeyNi6dy.js";import{G as d}from"./Grid-D9g5mTtE.js";import{G as i}from"./GridItem-BDWYFOtC.js";import{S as l}from"./Select-DMq8VGQw.js";import{B as a}from"./Button-DWs9gr3F.js";import{R as x,a as u}from"./Radio-Ck8d4AAd.js";import{C as I}from"./CheckboxGroup-CYfsXN0c.js";import{C as G}from"./Checkbox-DjkD4i3p.js";import{T as t}from"./TextField-ipFH64Cn.js";import{L as p}from"./ListBoxItem-Cb2xmTRo.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-Di2SFccO.js";import"./clsx-B-dksMZM.js";import"./useFormValidation-BSTLnn3c.js";import"./useFocusRing-iYG5kAH5.js";import"./index-DG2WG7qx.js";import"./index-BFSl9xNw.js";import"./clsx-Ciqy0D92.js";import"./Select-eqI5OvCc.js";import"./Button-qMrleB50.js";import"./Hidden-DKkXPRAB.js";import"./useLabels-mdXMBDxR.js";import"./useButton-DdA7_Pcq.js";import"./FieldError-CoMeK_07.js";import"./Text-CyTszoD0.js";import"./intlStrings-ZMTSFH_M.js";import"./ListBox-Cva-IwHD.js";import"./Collection-BVD5TKUp.js";import"./index-C0l6azJG.js";import"./DragAndDrop-B372wv-t.js";import"./getScrollParent-CU028xxg.js";import"./scrollIntoView-DpvrOgVf.js";import"./Separator-DufOEZii.js";import"./SelectionManager-CnO4PmcI.js";import"./useEvent-B4KHg1tu.js";import"./SelectionIndicator-KAAZ95Tb.js";import"./useDescription-CFNrmai2.js";import"./useControlledState-BchtzvOb.js";import"./ListKeyboardDelegate-Cc3loV_6.js";import"./RSPContexts-CjB3U11V.js";import"./inertValue-0AXaI_58.js";import"./useListState-o0KUkBAG.js";import"./Dialog-CdAaapKg.js";import"./OverlayArrow-D_-Dtn70.js";import"./useResizeObserver-Cc2u12GN.js";import"./PressResponder-BzESNd9C.js";import"./useLocalizedStringFormatter-CytWURy7.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./VisuallyHidden-C4wfS2L1.js";import"./useField-CLEe5K9S.js";import"./Label-Bea9dcgg.js";import"./useLocalizedStringFormatter-CqtWfHXd.js";import"./x-DRfTRCVq.js";import"./createLucideIcon-CWyh0Gfz.js";import"./Heading-I7geM05-.js";import"./info-CO_Xb2iZ.js";import"./Popover-7OubAj3D.js";import"./Tag-JSDwg59Y.js";import"./useHighlightSelectionDescription-DKOsKyBP.js";import"./useUpdateEffect-D--3dXfO.js";import"./useHasTabbableChild-BeonQBjg.js";import"./chevron-down-yBzt2jMc.js";import"./Text-B1Y_W_Ha.js";import"./FieldError-B54BjIf5.js";import"./Button.module-CtQ1deO8.js";import"./Group-BnPDIwkY.js";import"./check-B1dvlcQp.js";import"./useToggleState-CNZ0aLss.js";import"./TextFieldBase-HO88lyPR.js";import"./TextField-CgP7IuTK.js";import"./Input-Bqn46Kdc.js";import"./useTextField-Bkc3J0x_.js";import"./TextField.module-1-_3qsJZ.js";import"./Virtualizer-CQK14ram.js";const ye={component:c,title:"Examples/Form",tags:["autodocs"],argTypes:{}},o={args:{},render:()=>{const m=["Banan","Apple","Mango"];return e.jsxs(d,{children:[e.jsx(i,{size:12,children:e.jsx(t,{label:"Ange ditt fullständiga namn",description:"Glöm inte dina eventuella mellannamn!"})}),e.jsx(i,{size:12,children:e.jsx(t,{label:"Personnummmer",description:"Anges på formen ÅÅMMDD-XXXX"})}),e.jsx(i,{size:12,children:e.jsx(l,{label:"Vilken är din favoritfrukt",placeholder:"Välj en frukt",selectionMode:"single",items:m.map(r=>({id:r,name:r})),children:r=>e.jsx(p,{...r,children:r.name})})}),e.jsx(i,{children:e.jsx(a,{children:"Skicka"})})]})}},s={args:{},render:()=>{const m=["A","B","C"],r=["Anledning A","Anledning B","Anledning C"];return e.jsx("div",{children:e.jsxs(d,{children:[e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(x,{label:"Anledning",description:"Ange anledning till att du söker i databasen",children:r.map(n=>e.jsx(u,{value:n,children:n},n))})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(I,{label:"Databas",description:"Välj databas att söka i",children:m.map(n=>e.jsx(G,{value:n,children:n},n))})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Namn",description:""})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Personnummer"})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(l,{label:"Kön",description:"Kan lämnas tomt",placeholder:"Välj kön",selectionMode:"single",items:m.map(n=>({name:n,id:n})),children:n=>e.jsx(p,{...n,children:n.name})})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Ärendekod"})}),e.jsx(i,{size:"auto",children:e.jsx(a,{children:"Sök"})}),e.jsx(i,{size:"auto",children:e.jsx(a,{variant:"secondary",children:"Rensa"})})]})})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
}`,...s.parameters?.docs?.source}}};const Ke=["SimpleForm","TwoColumnForm"];export{o as SimpleForm,s as TwoColumnForm,Ke as __namedExportsOrder,ye as default};
