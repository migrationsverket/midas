import{j as e}from"./iframe-BWIE8y1J.js";import{$ as c}from"./Form-BR5_CXxH.js";import{G as d}from"./Grid-CIIvHxp9.js";import{G as i}from"./GridItem-B4Chg0sI.js";import{a as x,R as u}from"./Radio-Bl4U1a35.js";import{C as I}from"./CheckboxGroup-b0avIs7e.js";import{C as G}from"./Checkbox-Ct-xw609.js";import{T as t}from"./TextField-BS6kSEes.js";import{S as l}from"./Select-QBKO-GE-.js";import{L as p}from"./ListBoxItem-B3gbR0wG.js";import{B as a}from"./Button-Bhvh_nWe.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-CFen-6Tt.js";import"./clsx-B-dksMZM.js";import"./useFormValidation-DD0xfOTY.js";import"./useFocusRing-CeRcfsBW.js";import"./index-BQbDDAyZ.js";import"./index-CBFugdgC.js";import"./clsx-Ciqy0D92.js";import"./Group-LsQGd-XX.js";import"./FieldError-DQP9cPYO.js";import"./Text-CGdD-JKO.js";import"./Text-LCrvkG-q.js";import"./Button-BmJwA7TX.js";import"./Hidden-CsKeLRVA.js";import"./useLabels-CSgzIvv9.js";import"./useButton-lbVBAiGE.js";import"./SelectionIndicator-BO5Qnhtg.js";import"./useField-ZPISWi-E.js";import"./VisuallyHidden-nM3_t9w5.js";import"./useControlledState-lz_f80Ux.js";import"./Label-CV_Da0Bi.js";import"./Dialog-3-ArKWex.js";import"./RSPContexts-D6p6nrlG.js";import"./OverlayArrow-D-hM9AVS.js";import"./useResizeObserver-0lhP-fxz.js";import"./Collection-Bg_dNDsQ.js";import"./index-ChxbMPWK.js";import"./Separator-DmR7lQkw.js";import"./SelectionManager-DgudSWxj.js";import"./useEvent-0NTm2RcH.js";import"./scrollIntoView-CeNGtx-R.js";import"./useDescription-tI3vnHYy.js";import"./ListKeyboardDelegate-B7MchG2u.js";import"./PressResponder-Dq3FJWfS.js";import"./useLocalizedStringFormatter-BmqPCVAe.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-DdMi5Hdy.js";import"./getScrollParent-Djcm2OaX.js";import"./x-DszmzPSL.js";import"./createLucideIcon-BmTkHA-q.js";import"./useLocalizedStringFormatter-Bj-PcblM.js";import"./Heading-Bvqm9Oaw.js";import"./info-Bj9lPcsf.js";import"./Popover-Bqdnt-BT.js";import"./check-C0qjp1B9.js";import"./useToggleState-Z6Fhcp1w.js";import"./TextFieldBase-DuF8kQJ1.js";import"./Input-peW8mEC8.js";import"./useTextField-bUCF8UIG.js";import"./TextField.module-DdivwlC8.js";import"./intlStrings-ZMTSFH_M.js";import"./ListBox-AxKAtvPz.js";import"./DragAndDrop-CeUPae3A.js";import"./inertValue-C2CZcqI0.js";import"./useListState-DxHdUqrz.js";import"./TagGroup-D98k9MMN.js";import"./useGridListItem-CIetjvN4.js";import"./useHighlightSelectionDescription-DLsPmCoA.js";import"./useUpdateEffect-CEhd0Uc5.js";import"./useHasTabbableChild-Bs4iW09T.js";import"./chevron-down-mJATHa4g.js";import"./Virtualizer-DTAp0pyB.js";import"./Button.module-BB7N-cLd.js";const Le={component:c,title:"Examples/Form",tags:["autodocs"],argTypes:{}},o={args:{},render:()=>{const m=["Banan","Apple","Mango"];return e.jsxs(d,{children:[e.jsx(i,{size:12,children:e.jsx(t,{label:"Ange ditt fullständiga namn",description:"Glöm inte dina eventuella mellannamn!"})}),e.jsx(i,{size:12,children:e.jsx(t,{label:"Personnummmer",description:"Anges på formen ÅÅMMDD-XXXX"})}),e.jsx(i,{size:12,children:e.jsx(l,{label:"Vilken är din favoritfrukt",placeholder:"Välj en frukt",selectionMode:"single",items:m.map(r=>({id:r,name:r})),children:r=>e.jsx(p,{...r,children:r.name})})}),e.jsx(i,{children:e.jsx(a,{children:"Skicka"})})]})}},s={args:{},render:()=>{const m=["A","B","C"],r=["Anledning A","Anledning B","Anledning C"];return e.jsx("div",{children:e.jsxs(d,{children:[e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(x,{label:"Anledning",description:"Ange anledning till att du söker i databasen",children:r.map(n=>e.jsx(u,{value:n,children:n},n))})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(I,{label:"Databas",description:"Välj databas att söka i",children:m.map(n=>e.jsx(G,{value:n,children:n},n))})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Namn",description:""})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Personnummer"})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(l,{label:"Kön",description:"Kan lämnas tomt",placeholder:"Välj kön",selectionMode:"single",items:m.map(n=>({name:n,id:n})),children:n=>e.jsx(p,{...n,children:n.name})})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Ärendekod"})}),e.jsx(i,{size:"auto",children:e.jsx(a,{children:"Sök"})}),e.jsx(i,{size:"auto",children:e.jsx(a,{variant:"secondary",children:"Rensa"})})]})})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
