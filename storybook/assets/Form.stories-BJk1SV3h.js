import{j as e}from"./iframe-BHGbmSoX.js";import{$ as c}from"./Form-C7P4m3f5.js";import{G as d}from"./Grid-rjd-Uy37.js";import{G as i}from"./GridItem-DtH5vglD.js";import{T as t}from"./TextField-W4kwYGu2.js";import{S as l}from"./Select-DGCtE4P-.js";import{B as a}from"./Button-Dt4Dz_uA.js";import{R as x,a as u}from"./Radio-CfXA7TxE.js";import{C as I}from"./CheckboxGroup-CpUv_H4W.js";import{C as G}from"./Checkbox-C5Vm59CL.js";import{L as p}from"./ListBoxItem-CRArvIq4.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-u6nfEu2d.js";import"./clsx-B-dksMZM.js";import"./useFormValidation-Djr0e9BL.js";import"./useFocusRing-C-fWWvCQ.js";import"./index-DHRUWqon.js";import"./index-BlWlHcen.js";import"./clsx-Ciqy0D92.js";import"./TextFieldBase-CPqofumv.js";import"./TextField-B_jgD9WZ.js";import"./FieldError-BbuZpPii.js";import"./Text-DR-y75op.js";import"./Text-Co-Ig638.js";import"./RSPContexts-DxDwxdvK.js";import"./Group-BYkViKg0.js";import"./Input-PashETkB.js";import"./Hidden-HuY8qCdY.js";import"./Button-DBP2ABnj.js";import"./useLabels-jG-RMIhn.js";import"./useButton-DyLMe38J.js";import"./useTextField-DKjVGFlI.js";import"./useControlledState-BRSDM5kG.js";import"./useField-B4LIi9WL.js";import"./TextField.module-CgqiUiYQ.js";import"./Label-BCn-pGoc.js";import"./Dialog-CSAQrJFe.js";import"./OverlayArrow-D70C4uGL.js";import"./useResizeObserver-DNsdgQR9.js";import"./Collection-WK4i6Gww.js";import"./index-DqvNs5ao.js";import"./Separator-D1MFmn8z.js";import"./SelectionManager-B4SuEaEN.js";import"./useEvent-Dz6duQ_C.js";import"./scrollIntoView-CtWAMHuk.js";import"./SelectionIndicator-D5zgZXgJ.js";import"./useDescription-CztadFVS.js";import"./ListKeyboardDelegate-CeRSS6c8.js";import"./PressResponder-Dw1OdbxQ.js";import"./useLocalizedStringFormatter-CKK1hwYD.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-CyuRnS8g.js";import"./getScrollParent-Cpn7MDkE.js";import"./VisuallyHidden-BSU9NXEn.js";import"./x-CaOaLzID.js";import"./createLucideIcon-Pf4v_yLg.js";import"./useLocalizedStringFormatter-DYD_fmTs.js";import"./Heading-qIrSr_bu.js";import"./info-6j5tkDmW.js";import"./Popover-C4EEoVIv.js";import"./intlStrings-ZMTSFH_M.js";import"./ListBox-CvIhZLfU.js";import"./DragAndDrop-BxR_aZkp.js";import"./inertValue-D5xmf2y6.js";import"./useListState-Cs_Fobs4.js";import"./Tag-DAxQnxAS.js";import"./useHighlightSelectionDescription-DatyPNQ-.js";import"./useUpdateEffect-CMzFgY78.js";import"./useHasTabbableChild-Bye18Os1.js";import"./chevron-down-DZHiW1Xa.js";import"./Button.module-Co5e5YHp.js";import"./check-D00-lapz.js";import"./useToggleState-BrWrhnuc.js";import"./Virtualizer-Bxqt5H1r.js";const Le={component:c,title:"Examples/Form",tags:["autodocs"],argTypes:{}},o={args:{},render:()=>{const m=["Banan","Apple","Mango"];return e.jsxs(d,{children:[e.jsx(i,{size:12,children:e.jsx(t,{label:"Ange ditt fullständiga namn",description:"Glöm inte dina eventuella mellannamn!"})}),e.jsx(i,{size:12,children:e.jsx(t,{label:"Personnummmer",description:"Anges på formen ÅÅMMDD-XXXX"})}),e.jsx(i,{size:12,children:e.jsx(l,{label:"Vilken är din favoritfrukt",placeholder:"Välj en frukt",selectionMode:"single",items:m.map(r=>({id:r,name:r})),children:r=>e.jsx(p,{...r,children:r.name})})}),e.jsx(i,{children:e.jsx(a,{children:"Skicka"})})]})}},s={args:{},render:()=>{const m=["A","B","C"],r=["Anledning A","Anledning B","Anledning C"];return e.jsx("div",{children:e.jsxs(d,{children:[e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(x,{label:"Anledning",description:"Ange anledning till att du söker i databasen",children:r.map(n=>e.jsx(u,{value:n,children:n},n))})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(I,{label:"Databas",description:"Välj databas att söka i",children:m.map(n=>e.jsx(G,{value:n,children:n},n))})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Namn",description:""})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Personnummer"})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(l,{label:"Kön",description:"Kan lämnas tomt",placeholder:"Välj kön",selectionMode:"single",items:m.map(n=>({name:n,id:n})),children:n=>e.jsx(p,{...n,children:n.name})})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Ärendekod"})}),e.jsx(i,{size:"auto",children:e.jsx(a,{children:"Sök"})}),e.jsx(i,{size:"auto",children:e.jsx(a,{variant:"secondary",children:"Rensa"})})]})})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
