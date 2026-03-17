import{j as e}from"./iframe-ZeXYQ1RW.js";import{$ as c}from"./Form-Dy7AKgGH.js";import{G as d}from"./Grid-KpmRncd_.js";import{G as i}from"./GridItem-9052tqiW.js";import{a as x,R as u}from"./Radio-GwIw4V9C.js";import{C as I}from"./CheckboxGroup-DdUPawUX.js";import{C as G}from"./Checkbox-B9EHxwO4.js";import{T as t}from"./TextField-C9QR4QsO.js";import{S as l}from"./Select-D74dopTo.js";import{L as p}from"./ListBoxItem-CcMi3bMD.js";import{B as a}from"./Button-D_9dtB_J.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-DkAMXJPn.js";import"./clsx-B-dksMZM.js";import"./useFormValidation-CleU6jt7.js";import"./useFocusRing-B05DoKvO.js";import"./index-DbUHK1eY.js";import"./index-DDIUhUq_.js";import"./clsx-Ciqy0D92.js";import"./Group-w8iWAf8M.js";import"./FieldError-Bowa5wqw.js";import"./Text-Dve1S3pg.js";import"./Text-DNs8wtir.js";import"./Button-B1pz6NZE.js";import"./Hidden-Cw1xIodo.js";import"./useLabels-CvN3rkoX.js";import"./useButton-CABxZnPk.js";import"./SelectionIndicator-DpH7GgiJ.js";import"./useField-CTy-1_Zz.js";import"./VisuallyHidden-D_TH7fZb.js";import"./useControlledState-BI4OK_uN.js";import"./Label-CGOSgLuy.js";import"./Dialog-DxpY5c2y.js";import"./RSPContexts-ByHBnrKz.js";import"./OverlayArrow-C52gtWcy.js";import"./useResizeObserver-BwCizU0M.js";import"./Collection-Ck9H6G3Z.js";import"./index-CnOsB38m.js";import"./Separator-B6-IVA09.js";import"./SelectionManager-BGiQ5DnI.js";import"./useEvent-CBzfijIc.js";import"./scrollIntoView-DeVdbosm.js";import"./useDescription-B2YHcwj0.js";import"./ListKeyboardDelegate-BD0FshjV.js";import"./PressResponder-CKYrEyDT.js";import"./useLocalizedStringFormatter-26LgWsvD.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-fJG1DqlY.js";import"./getScrollParent-Dxv8a8bs.js";import"./x-jvAHOITw.js";import"./createLucideIcon-NOl_qKmM.js";import"./useLocalizedStringFormatter-DB_PBhmZ.js";import"./Heading-XJVIyJj6.js";import"./info-Bv_DOVod.js";import"./Popover-COVpWNht.js";import"./check-CnqCPZ1F.js";import"./useToggleState-Dy9P4wV5.js";import"./TextFieldBase-hTYYqXt6.js";import"./Input-ud92R6V9.js";import"./useTextField-Bd1NJOJF.js";import"./TextField.module-DdivwlC8.js";import"./intlStrings-ZMTSFH_M.js";import"./ListBox-Cng9XPrf.js";import"./DragAndDrop-BI8a55sF.js";import"./inertValue-BRkHdiG2.js";import"./useListState-5_M9CqFa.js";import"./TagGroup-DiER9E4J.js";import"./useHighlightSelectionDescription-CbqoaoFK.js";import"./useUpdateEffect-U3wXFl5Z.js";import"./useHasTabbableChild-BdwvYV2L.js";import"./chevron-down-BKyMWWKl.js";import"./Virtualizer-Dbup_MYm.js";import"./Button.module-BB7N-cLd.js";const Xe={component:c,title:"Examples/Form",tags:["autodocs"],argTypes:{}},o={args:{},render:()=>{const m=["Banan","Apple","Mango"];return e.jsxs(d,{children:[e.jsx(i,{size:12,children:e.jsx(t,{label:"Ange ditt fullständiga namn",description:"Glöm inte dina eventuella mellannamn!"})}),e.jsx(i,{size:12,children:e.jsx(t,{label:"Personnummmer",description:"Anges på formen ÅÅMMDD-XXXX"})}),e.jsx(i,{size:12,children:e.jsx(l,{label:"Vilken är din favoritfrukt",placeholder:"Välj en frukt",selectionMode:"single",items:m.map(r=>({id:r,name:r})),children:r=>e.jsx(p,{...r,children:r.name})})}),e.jsx(i,{children:e.jsx(a,{children:"Skicka"})})]})}},s={args:{},render:()=>{const m=["A","B","C"],r=["Anledning A","Anledning B","Anledning C"];return e.jsx("div",{children:e.jsxs(d,{children:[e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(x,{label:"Anledning",description:"Ange anledning till att du söker i databasen",children:r.map(n=>e.jsx(u,{value:n,children:n},n))})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(I,{label:"Databas",description:"Välj databas att söka i",children:m.map(n=>e.jsx(G,{value:n,children:n},n))})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Namn",description:""})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Personnummer"})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(l,{label:"Kön",description:"Kan lämnas tomt",placeholder:"Välj kön",selectionMode:"single",items:m.map(n=>({name:n,id:n})),children:n=>e.jsx(p,{...n,children:n.name})})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Ärendekod"})}),e.jsx(i,{size:"auto",children:e.jsx(a,{children:"Sök"})}),e.jsx(i,{size:"auto",children:e.jsx(a,{variant:"secondary",children:"Rensa"})})]})})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
