import{j as e}from"./iframe-cjgaQTbV.js";import{$ as c}from"./Form-BO_uRoUS.js";import{G as d}from"./Grid-DoO8ZaiT.js";import{G as i}from"./GridItem-tO_giWSJ.js";import{T as t}from"./TextField-Dd5bvnhS.js";import{S as l}from"./Select-MbLmrz_9.js";import{B as a}from"./Button-CJqsJHUi.js";import{R as x,a as u}from"./Radio-ChGtZbHt.js";import{C as I}from"./CheckboxGroup-kRwI6P-N.js";import{C as G}from"./Checkbox-DJM_MvjS.js";import{L as p}from"./ListBoxItem-LEKBYCiY.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-B7obR6Um.js";import"./clsx-B-dksMZM.js";import"./useFormValidation-B16qkoBX.js";import"./useFocusRing-tZdXTMa6.js";import"./index-CMBZFI91.js";import"./index-BuJptDJm.js";import"./clsx-Ciqy0D92.js";import"./TextFieldBase-Dbxlm4Gy.js";import"./TextField-BXa4bwxk.js";import"./FieldError-DSvxWesv.js";import"./Text-DzSej0my.js";import"./Text-BAi7lGpW.js";import"./RSPContexts-__dCJUmR.js";import"./Group-BhYG2Itl.js";import"./Input-DivuSL8L.js";import"./Hidden-BNDGTdgg.js";import"./Button-Bc8n5vPI.js";import"./useLabels-_lpRaq5N.js";import"./useButton-CJbE9EUu.js";import"./useTextField-DoqngYPp.js";import"./useControlledState-fnpb4ApR.js";import"./useField-BZOCOk0a.js";import"./TextField.module-CgqiUiYQ.js";import"./Label-CuBawSra.js";import"./Dialog-BsLWpUMD.js";import"./OverlayArrow-tYVmOJei.js";import"./useResizeObserver-Br0kjitw.js";import"./Collection-nVug7_BD.js";import"./index-CpszQrPg.js";import"./Separator-BFF7Ylml.js";import"./SelectionManager-CZ8Ui-y-.js";import"./useEvent-D2p3mPWR.js";import"./scrollIntoView-DfJRvT_I.js";import"./SelectionIndicator-Dcikiw-2.js";import"./useDescription-DoEqjAMH.js";import"./ListKeyboardDelegate-CEa8y7i2.js";import"./PressResponder-5EseZFBi.js";import"./useLocalizedStringFormatter-Bja4yra-.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./getScrollParent-DQLmtl1X.js";import"./VisuallyHidden-DFAX4X2F.js";import"./x-DPDdbP7_.js";import"./createLucideIcon-B-E7-HZJ.js";import"./useLocalizedStringFormatter-DhHkNnmO.js";import"./Heading-T_2JYl4t.js";import"./info-CNh9d9md.js";import"./Popover-B4wTK_E3.js";import"./intlStrings-ZMTSFH_M.js";import"./ListBox-qgKJvec-.js";import"./DragAndDrop-DgXeHy_I.js";import"./inertValue-C3ScUgWF.js";import"./useListState-DZobQRgn.js";import"./Tag-DksmHZk4.js";import"./useHighlightSelectionDescription-Da1Rt3FO.js";import"./useUpdateEffect-Cz18ujy8.js";import"./useHasTabbableChild-fir6A5J8.js";import"./chevron-down-JY9LysMo.js";import"./Button.module-Co5e5YHp.js";import"./check-CpcFRN_I.js";import"./useToggleState-E87EsBLN.js";import"./Virtualizer-B_VYEF3d.js";const Xe={component:c,title:"Examples/Form",tags:["autodocs"],argTypes:{}},o={args:{},render:()=>{const m=["Banan","Apple","Mango"];return e.jsxs(d,{children:[e.jsx(i,{size:12,children:e.jsx(t,{label:"Ange ditt fullständiga namn",description:"Glöm inte dina eventuella mellannamn!"})}),e.jsx(i,{size:12,children:e.jsx(t,{label:"Personnummmer",description:"Anges på formen ÅÅMMDD-XXXX"})}),e.jsx(i,{size:12,children:e.jsx(l,{label:"Vilken är din favoritfrukt",placeholder:"Välj en frukt",selectionMode:"single",items:m.map(r=>({id:r,name:r})),children:r=>e.jsx(p,{...r,children:r.name})})}),e.jsx(i,{children:e.jsx(a,{children:"Skicka"})})]})}},s={args:{},render:()=>{const m=["A","B","C"],r=["Anledning A","Anledning B","Anledning C"];return e.jsx("div",{children:e.jsxs(d,{children:[e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(x,{label:"Anledning",description:"Ange anledning till att du söker i databasen",children:r.map(n=>e.jsx(u,{value:n,children:n},n))})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(I,{label:"Databas",description:"Välj databas att söka i",children:m.map(n=>e.jsx(G,{value:n,children:n},n))})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Namn",description:""})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Personnummer"})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(l,{label:"Kön",description:"Kan lämnas tomt",placeholder:"Välj kön",selectionMode:"single",items:m.map(n=>({name:n,id:n})),children:n=>e.jsx(p,{...n,children:n.name})})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Ärendekod"})}),e.jsx(i,{size:"auto",children:e.jsx(a,{children:"Sök"})}),e.jsx(i,{size:"auto",children:e.jsx(a,{variant:"secondary",children:"Rensa"})})]})})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
