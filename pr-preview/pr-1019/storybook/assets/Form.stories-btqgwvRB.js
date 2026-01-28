import{j as e}from"./iframe-Dw6ThTAb.js";import{$ as c}from"./Form-XKsvFydX.js";import{G as d}from"./Grid-DO7m020p.js";import{G as i}from"./GridItem-B9rGNoaq.js";import{T as t}from"./TextField-CqSQXP0F.js";import{S as l}from"./Select-r2MQRH0W.js";import{B as a}from"./Button-B1ILUDpZ.js";import{R as x,a as u}from"./Radio-CQ8uKT7U.js";import{C as I}from"./CheckboxGroup-CA1r0-b0.js";import{C as G}from"./Checkbox-BtPrFU3S.js";import{L as p}from"./ListBoxItem-CKPRzDKV.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-Cc21G09W.js";import"./clsx-B-dksMZM.js";import"./useFormValidation-CRMkN8GB.js";import"./useFocusRing-xc1II4Ss.js";import"./index-CYKqCDi7.js";import"./index-MEMx4wU2.js";import"./clsx-Ciqy0D92.js";import"./TextFieldBase-BsobsOPP.js";import"./TextField-j9bDJc0a.js";import"./FieldError-DXxOP3rc.js";import"./Text-CUe8uG9W.js";import"./Text-COf0hmuO.js";import"./RSPContexts-tvXcEv4V.js";import"./Group-D-nP0mrf.js";import"./Input-dN5D6L9t.js";import"./Hidden-SnJFNY5a.js";import"./Button-0Xunpr60.js";import"./useLabels-DkWQHrpu.js";import"./useButton-Au9jFQG2.js";import"./useTextField-BsccNDKb.js";import"./useControlledState-CUSHFPNB.js";import"./useField-VxKjSK4Y.js";import"./TextField.module-CgqiUiYQ.js";import"./Label-CzKfUXQk.js";import"./Dialog-rVuOUoSU.js";import"./OverlayArrow-p_rObb7K.js";import"./useResizeObserver-_DN6Irs7.js";import"./Collection-BBo2i_f0.js";import"./index-BOINZ4le.js";import"./Separator-CYAzFREs.js";import"./SelectionManager-DkglZCtx.js";import"./useEvent-DasM2UJj.js";import"./scrollIntoView-CtWAMHuk.js";import"./SelectionIndicator-DKG-qAuu.js";import"./useDescription-D06z1dS-.js";import"./ListKeyboardDelegate-BP400_Lu.js";import"./PressResponder-CZxiG_Gi.js";import"./useLocalizedStringFormatter-BY0kdCm4.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-Dq0qz9Ho.js";import"./getScrollParent-Cpn7MDkE.js";import"./VisuallyHidden-CdWjTb8h.js";import"./x-B_wX4fA-.js";import"./createLucideIcon-B3ctXaYi.js";import"./useLocalizedStringFormatter-n073QgDi.js";import"./Heading-CxtLSvtP.js";import"./info-BvHn66Gl.js";import"./Popover-Bl0TCAnK.js";import"./intlStrings-ZMTSFH_M.js";import"./ListBox-C_nRJz9u.js";import"./DragAndDrop-Cw_rPWYa.js";import"./inertValue-BUpgdybD.js";import"./useListState-CSSWzZgf.js";import"./Tag-DxMC_60b.js";import"./useHighlightSelectionDescription-CrvDBKvA.js";import"./useUpdateEffect-MG618h7c.js";import"./useHasTabbableChild-C6tOEHqj.js";import"./chevron-down-DmZ5eXhv.js";import"./Button.module-Co5e5YHp.js";import"./check-BCXwpl9Y.js";import"./useToggleState-Dx8W6wIq.js";import"./Virtualizer-DjMoY7_F.js";const Le={component:c,title:"Examples/Form",tags:["autodocs"],argTypes:{}},o={args:{},render:()=>{const m=["Banan","Apple","Mango"];return e.jsxs(d,{children:[e.jsx(i,{size:12,children:e.jsx(t,{label:"Ange ditt fullständiga namn",description:"Glöm inte dina eventuella mellannamn!"})}),e.jsx(i,{size:12,children:e.jsx(t,{label:"Personnummmer",description:"Anges på formen ÅÅMMDD-XXXX"})}),e.jsx(i,{size:12,children:e.jsx(l,{label:"Vilken är din favoritfrukt",placeholder:"Välj en frukt",selectionMode:"single",items:m.map(r=>({id:r,name:r})),children:r=>e.jsx(p,{...r,children:r.name})})}),e.jsx(i,{children:e.jsx(a,{children:"Skicka"})})]})}},s={args:{},render:()=>{const m=["A","B","C"],r=["Anledning A","Anledning B","Anledning C"];return e.jsx("div",{children:e.jsxs(d,{children:[e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(x,{label:"Anledning",description:"Ange anledning till att du söker i databasen",children:r.map(n=>e.jsx(u,{value:n,children:n},n))})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(I,{label:"Databas",description:"Välj databas att söka i",children:m.map(n=>e.jsx(G,{value:n,children:n},n))})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Namn",description:""})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Personnummer"})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(l,{label:"Kön",description:"Kan lämnas tomt",placeholder:"Välj kön",selectionMode:"single",items:m.map(n=>({name:n,id:n})),children:n=>e.jsx(p,{...n,children:n.name})})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Ärendekod"})}),e.jsx(i,{size:"auto",children:e.jsx(a,{children:"Sök"})}),e.jsx(i,{size:"auto",children:e.jsx(a,{variant:"secondary",children:"Rensa"})})]})})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
