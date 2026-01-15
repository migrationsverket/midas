import{j as e}from"./iframe-CghREHCp.js";import{$ as c}from"./Form-CmblNqKq.js";import{G as d}from"./Grid-rGtiZVhm.js";import{G as i}from"./GridItem-D1RcBvoQ.js";import{T as t}from"./TextField-CPkWNutH.js";import{S as l}from"./Select-B_G3NvgC.js";import{B as a}from"./Button-BgVDIbm9.js";import{R as x,a as u}from"./Radio-BfrWk-RV.js";import{C as I}from"./CheckboxGroup-Bnu-DDBp.js";import{C as G}from"./Checkbox-B5d-SaK9.js";import{L as p}from"./ListBoxItem-Oisaj6tN.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-DcbzADZG.js";import"./clsx-B-dksMZM.js";import"./useFormValidation-D-acFxN0.js";import"./useFocusRing-Os94pZjv.js";import"./index-C_9syRFs.js";import"./index-bNnSmjOQ.js";import"./clsx-Ciqy0D92.js";import"./TextFieldBase-DowJHrvE.js";import"./TextField-CGmLYk1y.js";import"./FieldError-v9jgVeW0.js";import"./Text-Buk_-DSi.js";import"./Text-Bgsdl3BX.js";import"./RSPContexts-DXf2tjJD.js";import"./Group-B2dFf8ap.js";import"./Input-qQ6a_-uU.js";import"./Hidden-BLP0xzBf.js";import"./Button-BbapMa4Z.js";import"./useLabels-BLq2FESX.js";import"./useButton-DICYCMex.js";import"./useTextField-CQ1crf_g.js";import"./useControlledState-BNCqjruO.js";import"./useField--pcLrrjr.js";import"./TextField.module-CgqiUiYQ.js";import"./Label-noknOOwN.js";import"./Dialog-CiLzqrEe.js";import"./OverlayArrow-Bfh_W1Tb.js";import"./useResizeObserver-D9ozIvVX.js";import"./Collection-B62DR8CB.js";import"./index-Cp1itJqd.js";import"./Separator-BGbIguZq.js";import"./SelectionManager-CibFROCu.js";import"./useEvent-BLXjJ4XY.js";import"./scrollIntoView-CtWAMHuk.js";import"./SelectionIndicator-DEJFzjSy.js";import"./useDescription-DHW5wKPx.js";import"./ListKeyboardDelegate-BzhPUJdu.js";import"./PressResponder-BmsxlLXe.js";import"./useLocalizedStringFormatter-BHRqU8bD.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-DX_-x3AZ.js";import"./getScrollParent-Cpn7MDkE.js";import"./VisuallyHidden-CK_U2Q_P.js";import"./x-Zoiz82II.js";import"./createLucideIcon-DCyJjHTa.js";import"./useLocalizedStringFormatter-43Jpf1jS.js";import"./Heading-BCIKpTaK.js";import"./info-COZo-S7T.js";import"./Popover-G_MR9vbR.js";import"./intlStrings-ZMTSFH_M.js";import"./ListBox-kkHzvoXX.js";import"./DragAndDrop-DWTugXvx.js";import"./inertValue-CLDKFNFC.js";import"./useListState-DLv7npMF.js";import"./Tag-BX1kPrCm.js";import"./useHighlightSelectionDescription-WfkAJfbv.js";import"./useUpdateEffect-CkcBqBng.js";import"./useHasTabbableChild-B3Hr9_4d.js";import"./chevron-down-Drf9WzvK.js";import"./Button.module-Co5e5YHp.js";import"./check-CL5H9dSy.js";import"./useToggleState-ROAp3C1D.js";import"./Virtualizer-NLE5Emvd.js";const Le={component:c,title:"Examples/Form",tags:["autodocs"],argTypes:{}},o={args:{},render:()=>{const m=["Banan","Apple","Mango"];return e.jsxs(d,{children:[e.jsx(i,{size:12,children:e.jsx(t,{label:"Ange ditt fullständiga namn",description:"Glöm inte dina eventuella mellannamn!"})}),e.jsx(i,{size:12,children:e.jsx(t,{label:"Personnummmer",description:"Anges på formen ÅÅMMDD-XXXX"})}),e.jsx(i,{size:12,children:e.jsx(l,{label:"Vilken är din favoritfrukt",placeholder:"Välj en frukt",selectionMode:"single",items:m.map(r=>({id:r,name:r})),children:r=>e.jsx(p,{...r,children:r.name})})}),e.jsx(i,{children:e.jsx(a,{children:"Skicka"})})]})}},s={args:{},render:()=>{const m=["A","B","C"],r=["Anledning A","Anledning B","Anledning C"];return e.jsx("div",{children:e.jsxs(d,{children:[e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(x,{label:"Anledning",description:"Ange anledning till att du söker i databasen",children:r.map(n=>e.jsx(u,{value:n,children:n},n))})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(I,{label:"Databas",description:"Välj databas att söka i",children:m.map(n=>e.jsx(G,{value:n,children:n},n))})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Namn",description:""})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Personnummer"})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(l,{label:"Kön",description:"Kan lämnas tomt",placeholder:"Välj kön",selectionMode:"single",items:m.map(n=>({name:n,id:n})),children:n=>e.jsx(p,{...n,children:n.name})})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Ärendekod"})}),e.jsx(i,{size:"auto",children:e.jsx(a,{children:"Sök"})}),e.jsx(i,{size:"auto",children:e.jsx(a,{variant:"secondary",children:"Rensa"})})]})})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
