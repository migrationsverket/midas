import{j as e}from"./iframe-CFaxLqEa.js";import{$ as c}from"./Form-3RCJ_QBt.js";import{G as d}from"./Grid-BWzCFHpf.js";import{G as i}from"./GridItem-DwlxfcO9.js";import{a as x,R as u}from"./Radio-hhyV_aJr.js";import{C as I}from"./CheckboxGroup-DxK5cE02.js";import{C as G}from"./Checkbox-kJfxr9cP.js";import{T as t}from"./TextField-CPTUpMUS.js";import{S as l}from"./Select-BfDHcpOm.js";import{L as p}from"./ListBoxItem-B5YRNcu2.js";import{B as a}from"./Button-NFqaYpQd.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-BgY9U9Qr.js";import"./clsx-B-dksMZM.js";import"./useFormValidation-CNrnZzUV.js";import"./useFocusRing-B3QBGcNF.js";import"./index-GxleSbEr.js";import"./index-g5CyflDh.js";import"./clsx-Ciqy0D92.js";import"./Group-CTP_B7RP.js";import"./FieldError-CWVv_ne6.js";import"./Text-LU79jMy_.js";import"./Text-B0xzN78n.js";import"./Button-CRZFTWuY.js";import"./Hidden-Cw9STqj5.js";import"./useLabels-ClJSaiIH.js";import"./useButton-DZkgje5C.js";import"./SelectionIndicator-Cbzi_KBz.js";import"./useField-Da0jDZEi.js";import"./VisuallyHidden-BYWYy-1_.js";import"./useControlledState-lnm2btlX.js";import"./Label-BtcDCSuE.js";import"./Dialog-Bzr23H7G.js";import"./RSPContexts-CKwAPfOb.js";import"./OverlayArrow-BW1bAGv8.js";import"./useResizeObserver-Csuma0yr.js";import"./Collection-Dg55PgvO.js";import"./index-Dtj87kt5.js";import"./Separator-P9MdtsbI.js";import"./SelectionManager-Bk1PTlDQ.js";import"./useEvent-Cb-Pr1Jl.js";import"./scrollIntoView-CtWAMHuk.js";import"./useDescription-BMyeVBGj.js";import"./ListKeyboardDelegate-Cz9dpHB8.js";import"./PressResponder-bv_9uGzA.js";import"./useLocalizedStringFormatter-BhBXUazm.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-Dr53HehO.js";import"./getScrollParent-Cpn7MDkE.js";import"./x-DVurtZys.js";import"./createLucideIcon-0-aYMEMi.js";import"./useLocalizedStringFormatter-LFhdxWG_.js";import"./Heading-BOTyYXmi.js";import"./info-DD1bMW4r.js";import"./Popover-BwbmJqMI.js";import"./check-Db2cS1fr.js";import"./useToggleState-C0SfuOTE.js";import"./TextFieldBase-D5GUcrUa.js";import"./TextField-DPtIEv0l.js";import"./Input-BCyWWN30.js";import"./useTextField-C5Tm--r5.js";import"./TextField.module-DpzeWGpt.js";import"./intlStrings-ZMTSFH_M.js";import"./ListBox-BX1WfUtv.js";import"./DragAndDrop-9acEh-_r.js";import"./inertValue-CledTBM5.js";import"./useListState-Cu9sF6Gl.js";import"./Tag-ceF6L71C.js";import"./useHighlightSelectionDescription-DWwHTB_a.js";import"./useUpdateEffect-xJ6D_ON2.js";import"./useHasTabbableChild-Dv3hG0Dw.js";import"./chevron-down-L1-fbTsp.js";import"./Virtualizer-JolvINsX.js";import"./Button.module-Co5e5YHp.js";const Le={component:c,title:"Examples/Form",tags:["autodocs"],argTypes:{}},o={args:{},render:()=>{const m=["Banan","Apple","Mango"];return e.jsxs(d,{children:[e.jsx(i,{size:12,children:e.jsx(t,{label:"Ange ditt fullständiga namn",description:"Glöm inte dina eventuella mellannamn!"})}),e.jsx(i,{size:12,children:e.jsx(t,{label:"Personnummmer",description:"Anges på formen ÅÅMMDD-XXXX"})}),e.jsx(i,{size:12,children:e.jsx(l,{label:"Vilken är din favoritfrukt",placeholder:"Välj en frukt",selectionMode:"single",items:m.map(r=>({id:r,name:r})),children:r=>e.jsx(p,{...r,children:r.name})})}),e.jsx(i,{children:e.jsx(a,{children:"Skicka"})})]})}},s={args:{},render:()=>{const m=["A","B","C"],r=["Anledning A","Anledning B","Anledning C"];return e.jsx("div",{children:e.jsxs(d,{children:[e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(x,{label:"Anledning",description:"Ange anledning till att du söker i databasen",children:r.map(n=>e.jsx(u,{value:n,children:n},n))})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(I,{label:"Databas",description:"Välj databas att söka i",children:m.map(n=>e.jsx(G,{value:n,children:n},n))})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Namn",description:""})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Personnummer"})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(l,{label:"Kön",description:"Kan lämnas tomt",placeholder:"Välj kön",selectionMode:"single",items:m.map(n=>({name:n,id:n})),children:n=>e.jsx(p,{...n,children:n.name})})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Ärendekod"})}),e.jsx(i,{size:"auto",children:e.jsx(a,{children:"Sök"})}),e.jsx(i,{size:"auto",children:e.jsx(a,{variant:"secondary",children:"Rensa"})})]})})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
