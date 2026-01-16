import{j as e}from"./iframe-CJgCBOSn.js";import{$ as c}from"./Form-BdW_DhZm.js";import{G as d}from"./Grid-Dt5O9to9.js";import{G as i}from"./GridItem-DBPZoK8d.js";import{T as t}from"./TextField-BOkhRNJq.js";import{S as l}from"./Select-7HYxS_h_.js";import{B as a}from"./Button-Cymdj4BH.js";import{R as x,a as u}from"./Radio-DfE36hgw.js";import{C as I}from"./CheckboxGroup-FB3S7wne.js";import{C as G}from"./Checkbox-DlYLyuve.js";import{L as p}from"./ListBoxItem-d0Q7qWZW.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-g4p4NUI-.js";import"./clsx-B-dksMZM.js";import"./useFormValidation-BhcJhbtd.js";import"./useFocusRing-Yl6f3H1r.js";import"./index-D7z4XUKW.js";import"./index-JexUwc7G.js";import"./clsx-Ciqy0D92.js";import"./TextFieldBase-Mur83shj.js";import"./TextField-bD1zuqy8.js";import"./FieldError-BvHL-L14.js";import"./Text-DWxQCZze.js";import"./Text-Dgha63Ct.js";import"./RSPContexts-D9FhM06Z.js";import"./Group-CNMQQPfP.js";import"./Input-CEChKpTn.js";import"./Hidden-ImloFknN.js";import"./Button-CBtGc9Ub.js";import"./useLabels-Dg-uXO6o.js";import"./useButton-Wu2FI5Vk.js";import"./useTextField-CTGAYV6K.js";import"./useControlledState-ChV93gD3.js";import"./useField-BIMlSPPT.js";import"./TextField.module-CgqiUiYQ.js";import"./Label-DxebCx5j.js";import"./Dialog-BXeq8yIU.js";import"./OverlayArrow-BWvk9jsj.js";import"./useResizeObserver-DLVkKK8_.js";import"./Collection-CwyFg43Q.js";import"./index-1nYhzryp.js";import"./Separator-BIK8Hd3Y.js";import"./SelectionManager-LF9c0-Pj.js";import"./useEvent-CGoIXu2x.js";import"./scrollIntoView-CtWAMHuk.js";import"./SelectionIndicator-B-7KPouL.js";import"./useDescription-B_8Lnofc.js";import"./ListKeyboardDelegate-Dlthfsmd.js";import"./PressResponder-CyKCGOJN.js";import"./useLocalizedStringFormatter-CP4b5mEF.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-BeMjaL19.js";import"./getScrollParent-Cpn7MDkE.js";import"./VisuallyHidden-lpY5sFDd.js";import"./x-C3uYOi1E.js";import"./createLucideIcon-Dnv4tKqV.js";import"./useLocalizedStringFormatter-BC67XuMA.js";import"./Heading-B8KjDrUi.js";import"./info-DSAuCf5O.js";import"./Popover-CvF2RunL.js";import"./intlStrings-ZMTSFH_M.js";import"./ListBox-CQnvc3fw.js";import"./DragAndDrop-CSOdn6JS.js";import"./inertValue-rt4R1NoB.js";import"./useListState-B5jkAcMN.js";import"./Tag-S3Kd-4T-.js";import"./useHighlightSelectionDescription-W3WgLhsX.js";import"./useUpdateEffect-BpdQZvBU.js";import"./useHasTabbableChild-DvTODr3V.js";import"./chevron-down-iCTRFCnQ.js";import"./Button.module-Co5e5YHp.js";import"./check-CGlIQRFQ.js";import"./useToggleState-KgwE-ImN.js";import"./Virtualizer-CKZFgaAU.js";const Le={component:c,title:"Examples/Form",tags:["autodocs"],argTypes:{}},o={args:{},render:()=>{const m=["Banan","Apple","Mango"];return e.jsxs(d,{children:[e.jsx(i,{size:12,children:e.jsx(t,{label:"Ange ditt fullständiga namn",description:"Glöm inte dina eventuella mellannamn!"})}),e.jsx(i,{size:12,children:e.jsx(t,{label:"Personnummmer",description:"Anges på formen ÅÅMMDD-XXXX"})}),e.jsx(i,{size:12,children:e.jsx(l,{label:"Vilken är din favoritfrukt",placeholder:"Välj en frukt",selectionMode:"single",items:m.map(r=>({id:r,name:r})),children:r=>e.jsx(p,{...r,children:r.name})})}),e.jsx(i,{children:e.jsx(a,{children:"Skicka"})})]})}},s={args:{},render:()=>{const m=["A","B","C"],r=["Anledning A","Anledning B","Anledning C"];return e.jsx("div",{children:e.jsxs(d,{children:[e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(x,{label:"Anledning",description:"Ange anledning till att du söker i databasen",children:r.map(n=>e.jsx(u,{value:n,children:n},n))})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(I,{label:"Databas",description:"Välj databas att söka i",children:m.map(n=>e.jsx(G,{value:n,children:n},n))})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Namn",description:""})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Personnummer"})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(l,{label:"Kön",description:"Kan lämnas tomt",placeholder:"Välj kön",selectionMode:"single",items:m.map(n=>({name:n,id:n})),children:n=>e.jsx(p,{...n,children:n.name})})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Ärendekod"})}),e.jsx(i,{size:"auto",children:e.jsx(a,{children:"Sök"})}),e.jsx(i,{size:"auto",children:e.jsx(a,{variant:"secondary",children:"Rensa"})})]})})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
