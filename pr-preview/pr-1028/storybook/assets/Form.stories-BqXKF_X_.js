import{j as e}from"./iframe-D7hgefFi.js";import{$ as c}from"./Form-dGELDKxX.js";import{G as d}from"./Grid-wO6Ypsbv.js";import{G as i}from"./GridItem-D49wQR5_.js";import{a as x,R as u}from"./Radio-Dhl_D8Og.js";import{C as I}from"./CheckboxGroup-GhI8O5gt.js";import{C as G}from"./Checkbox-CvxqOXZZ.js";import{T as t}from"./TextField-q5GBEnKF.js";import{S as l}from"./Select-C165Uue4.js";import{L as p}from"./ListBoxItem-BU31dUpc.js";import{B as a}from"./Button-rPxCLKTe.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-1x5w2eFs.js";import"./clsx-B-dksMZM.js";import"./useFormValidation-DyceQfcW.js";import"./useFocusRing-BEIKl4Np.js";import"./index-DPE8HPpB.js";import"./index-Dc5FCrrK.js";import"./clsx-Ciqy0D92.js";import"./Group-DvYOIurc.js";import"./FieldError-CIHFT2OA.js";import"./Text-bVuSsYW4.js";import"./Text-DGN2slpv.js";import"./Button-BkQQAf76.js";import"./Hidden-BPthAdp1.js";import"./useLabels-BNWiTCFC.js";import"./useButton-fmMn4P32.js";import"./SelectionIndicator-DSpOUr3d.js";import"./useField-C4uTTXDp.js";import"./VisuallyHidden-JgK0gAZ6.js";import"./useControlledState-C_xkaUiB.js";import"./Label-DZswzBQt.js";import"./Dialog-CPp57JpH.js";import"./RSPContexts-edSBr0y1.js";import"./OverlayArrow-CshA3CdM.js";import"./useResizeObserver-CoBEwF8j.js";import"./Collection-DT-GXrOm.js";import"./index-lLpdZDLW.js";import"./Separator-PRL3nm89.js";import"./SelectionManager-DizDU1Yl.js";import"./useEvent-Bq0KSq8o.js";import"./scrollIntoView-CtWAMHuk.js";import"./useDescription-BnUO2d3M.js";import"./ListKeyboardDelegate-B4SqK4yR.js";import"./PressResponder-GJNPmhvW.js";import"./useLocalizedStringFormatter-Df3u4y0n.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-Ba7Bng00.js";import"./getScrollParent-Cpn7MDkE.js";import"./x-DLgV2fM1.js";import"./createLucideIcon-B4zeiAHI.js";import"./useLocalizedStringFormatter-D_1GwcS9.js";import"./Heading-CjrbX93v.js";import"./info-zy5dga28.js";import"./Popover-CgvIwbeH.js";import"./check-BbXSzyfX.js";import"./useToggleState-EXB5HIQo.js";import"./TextFieldBase-B0FLys74.js";import"./TextField-DTa8yuuQ.js";import"./Input-BuVEFLLt.js";import"./useTextField-BK6YMpNa.js";import"./TextField.module-DpzeWGpt.js";import"./intlStrings-ZMTSFH_M.js";import"./ListBox-DIF4nYzx.js";import"./DragAndDrop-C9Cv1lQC.js";import"./inertValue-BtiCOGk6.js";import"./useListState-dhlWQRRC.js";import"./Tag-B0bIr0Fx.js";import"./useHighlightSelectionDescription-BVTFDxeq.js";import"./useUpdateEffect-DvKepdL0.js";import"./useHasTabbableChild-C8IMVCnA.js";import"./chevron-down-Dn_g8XlH.js";import"./Virtualizer-bX8LMlai.js";import"./Button.module-Co5e5YHp.js";const Le={component:c,title:"Examples/Form",tags:["autodocs"],argTypes:{}},o={args:{},render:()=>{const m=["Banan","Apple","Mango"];return e.jsxs(d,{children:[e.jsx(i,{size:12,children:e.jsx(t,{label:"Ange ditt fullständiga namn",description:"Glöm inte dina eventuella mellannamn!"})}),e.jsx(i,{size:12,children:e.jsx(t,{label:"Personnummmer",description:"Anges på formen ÅÅMMDD-XXXX"})}),e.jsx(i,{size:12,children:e.jsx(l,{label:"Vilken är din favoritfrukt",placeholder:"Välj en frukt",selectionMode:"single",items:m.map(r=>({id:r,name:r})),children:r=>e.jsx(p,{...r,children:r.name})})}),e.jsx(i,{children:e.jsx(a,{children:"Skicka"})})]})}},s={args:{},render:()=>{const m=["A","B","C"],r=["Anledning A","Anledning B","Anledning C"];return e.jsx("div",{children:e.jsxs(d,{children:[e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(x,{label:"Anledning",description:"Ange anledning till att du söker i databasen",children:r.map(n=>e.jsx(u,{value:n,children:n},n))})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(I,{label:"Databas",description:"Välj databas att söka i",children:m.map(n=>e.jsx(G,{value:n,children:n},n))})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Namn",description:""})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Personnummer"})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(l,{label:"Kön",description:"Kan lämnas tomt",placeholder:"Välj kön",selectionMode:"single",items:m.map(n=>({name:n,id:n})),children:n=>e.jsx(p,{...n,children:n.name})})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Ärendekod"})}),e.jsx(i,{size:"auto",children:e.jsx(a,{children:"Sök"})}),e.jsx(i,{size:"auto",children:e.jsx(a,{variant:"secondary",children:"Rensa"})})]})})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
