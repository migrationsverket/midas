import{j as e}from"./iframe-DUeAI7tp.js";import{$ as c}from"./Form-B03qr5JU.js";import{G as d}from"./Grid-CsZJg3OV.js";import{G as i}from"./GridItem-DT0MU7EA.js";import{T as t}from"./TextField-CUDMC47i.js";import{S as l}from"./Select-B4NdlvwM.js";import{B as a}from"./Button-8U8D-1-N.js";import{R as x,a as u}from"./Radio-wXkJANUO.js";import{C as I}from"./CheckboxGroup-BsRvez4N.js";import{C as G}from"./Checkbox-CT_dQfQo.js";import{L as p}from"./ListBoxItem-B5TffO0p.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-CvLaDxIV.js";import"./clsx-B-dksMZM.js";import"./useFormValidation-CpoUnyRZ.js";import"./useFocusRing-DorgMgHM.js";import"./index-yRPl9svU.js";import"./index-Dz_PiMJv.js";import"./clsx-Ciqy0D92.js";import"./TextFieldBase-B-ZfCve4.js";import"./TextField-F5_ItWqg.js";import"./FieldError-DUhQF5jP.js";import"./Text-DQm2ChpK.js";import"./Text-J32TKqmz.js";import"./RSPContexts-Mh3RzDNv.js";import"./Group-De1Wv5AW.js";import"./Input-B--X-FYB.js";import"./Hidden-COQ8gpNg.js";import"./Button-CJuM9N5t.js";import"./useLabels-CvUTJeh5.js";import"./useButton-yeWcga3Z.js";import"./useTextField-BilulsL9.js";import"./useControlledState-DBJr3GmL.js";import"./useField-_gYDHUtu.js";import"./TextField.module-1-_3qsJZ.js";import"./Label-_vYMl2Cv.js";import"./Dialog-BQLFffUA.js";import"./OverlayArrow-TKLna4Pw.js";import"./useResizeObserver-CMZ6HQmi.js";import"./Collection-DmrojhpD.js";import"./index-XB-XiJV0.js";import"./Separator-fI8mFCfc.js";import"./SelectionManager-DRAKVvKQ.js";import"./useEvent-CI3wsE6q.js";import"./scrollIntoView-chzndA4p.js";import"./SelectionIndicator-DMif_MbZ.js";import"./useDescription-r19AltPN.js";import"./ListKeyboardDelegate-D1i3GInX.js";import"./PressResponder-2tFiosxG.js";import"./useLocalizedStringFormatter-AYWN_0qc.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./getScrollParent-DBOnfGvj.js";import"./VisuallyHidden-CKOpq1qy.js";import"./useLocalizedStringFormatter-GLM_LUc3.js";import"./x-BB0vYnMs.js";import"./createLucideIcon-CDd_qO2R.js";import"./Heading-CXaVSElD.js";import"./info-DP8tsR4p.js";import"./Popover-wtTod8S2.js";import"./intlStrings-ZMTSFH_M.js";import"./ListBox-D6OPV4p_.js";import"./DragAndDrop-B2u0LPRy.js";import"./inertValue-C8Ijqi5u.js";import"./useListState-CZoZYF6J.js";import"./Tag-BoXZ2vVF.js";import"./useHighlightSelectionDescription-U-8zRS_W.js";import"./useUpdateEffect-Tb5oOGqi.js";import"./useHasTabbableChild-CHO3i8Zu.js";import"./chevron-down-MNXyYFJD.js";import"./Button.module-CtQ1deO8.js";import"./check-CeL9gZYU.js";import"./useToggleState-D0geAX_L.js";import"./Virtualizer-BdR-_U-v.js";const Xe={component:c,title:"Examples/Form",tags:["autodocs"],argTypes:{}},o={args:{},render:()=>{const m=["Banan","Apple","Mango"];return e.jsxs(d,{children:[e.jsx(i,{size:12,children:e.jsx(t,{label:"Ange ditt fullständiga namn",description:"Glöm inte dina eventuella mellannamn!"})}),e.jsx(i,{size:12,children:e.jsx(t,{label:"Personnummmer",description:"Anges på formen ÅÅMMDD-XXXX"})}),e.jsx(i,{size:12,children:e.jsx(l,{label:"Vilken är din favoritfrukt",placeholder:"Välj en frukt",selectionMode:"single",items:m.map(r=>({id:r,name:r})),children:r=>e.jsx(p,{...r,children:r.name})})}),e.jsx(i,{children:e.jsx(a,{children:"Skicka"})})]})}},s={args:{},render:()=>{const m=["A","B","C"],r=["Anledning A","Anledning B","Anledning C"];return e.jsx("div",{children:e.jsxs(d,{children:[e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(x,{label:"Anledning",description:"Ange anledning till att du söker i databasen",children:r.map(n=>e.jsx(u,{value:n,children:n},n))})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(I,{label:"Databas",description:"Välj databas att söka i",children:m.map(n=>e.jsx(G,{value:n,children:n},n))})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Namn",description:""})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Personnummer"})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(l,{label:"Kön",description:"Kan lämnas tomt",placeholder:"Välj kön",selectionMode:"single",items:m.map(n=>({name:n,id:n})),children:n=>e.jsx(p,{...n,children:n.name})})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Ärendekod"})}),e.jsx(i,{size:"auto",children:e.jsx(a,{children:"Sök"})}),e.jsx(i,{size:"auto",children:e.jsx(a,{variant:"secondary",children:"Rensa"})})]})})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
