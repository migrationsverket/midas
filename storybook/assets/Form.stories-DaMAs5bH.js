import{j as e}from"./iframe-CPEWJk1e.js";import{$ as c}from"./Form-DBPNPreF.js";import{G as d}from"./Grid-C7kOOu0h.js";import{G as i}from"./GridItem-CeV7YiBf.js";import{T as t}from"./TextField-CQFem-Ng.js";import{S as l}from"./Select-_PItgSrx.js";import{B as a}from"./Button-BQy3vbUL.js";import{R as x,a as u}from"./Radio-B2h-ZI_G.js";import{C as I}from"./CheckboxGroup-BRqihcwK.js";import{C as G}from"./Checkbox-BdwNImS9.js";import{L as p}from"./ListBoxItem-CJKWgQzw.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-zqFEKEPh.js";import"./clsx-B-dksMZM.js";import"./useFormValidation-MXNBESz-.js";import"./useFocusRing-ILJnPhUK.js";import"./index-CtVcx0yG.js";import"./index-CHrfy1ht.js";import"./clsx-Ciqy0D92.js";import"./TextFieldBase-BJkLv0HS.js";import"./TextField-CFaaXRtb.js";import"./FieldError-BBhushzd.js";import"./Text-C52_CQW6.js";import"./Text-BzUC5NL3.js";import"./RSPContexts-_qG5IX47.js";import"./Group-meBv5suB.js";import"./Input-DoVMqw0U.js";import"./Hidden-BTXMChVh.js";import"./Button-D3ppew-K.js";import"./useLabels-D-Hy4YuH.js";import"./useButton-DQ-7sy2B.js";import"./useTextField-BeHUeS3Q.js";import"./useControlledState-B4oLgPdt.js";import"./useField-D2evXDbG.js";import"./TextField.module-CgqiUiYQ.js";import"./Label-Cma1eFeW.js";import"./Dialog-DfXHAGIq.js";import"./OverlayArrow-6918mRBW.js";import"./useResizeObserver-CmDV-ULA.js";import"./Collection-CZrNbxBI.js";import"./index-B4Rt1yXi.js";import"./Separator-Bsaxviz_.js";import"./SelectionManager-CQfYVIUw.js";import"./useEvent-Bp8WcJ43.js";import"./scrollIntoView-CtWAMHuk.js";import"./SelectionIndicator-BXRPEXa6.js";import"./useDescription-BxyIXG7-.js";import"./ListKeyboardDelegate-ADeysOq7.js";import"./PressResponder-DBMlhjfl.js";import"./useLocalizedStringFormatter-B-rP9j5m.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-CbsLMYyh.js";import"./getScrollParent-Cpn7MDkE.js";import"./VisuallyHidden-Cf1hSoJ3.js";import"./x-BKUO9y3k.js";import"./createLucideIcon-CtQUs0EG.js";import"./useLocalizedStringFormatter-CifXZ-cd.js";import"./Heading-CsRWFTvi.js";import"./info-Cirzvkyu.js";import"./Popover-g-KzvEHi.js";import"./intlStrings-ZMTSFH_M.js";import"./ListBox-CW7U8ZGb.js";import"./DragAndDrop-BpY2-yYQ.js";import"./inertValue-D4J0YaLu.js";import"./useListState-CGonC-KD.js";import"./Tag-BPiVtYuD.js";import"./useHighlightSelectionDescription-Dor4lbjO.js";import"./useUpdateEffect-HE8IINMA.js";import"./useHasTabbableChild-DDbs662D.js";import"./chevron-down-Ceb_qZ5x.js";import"./Button.module-Co5e5YHp.js";import"./check-C-T2S4ok.js";import"./useToggleState-3gjlmx7q.js";import"./Virtualizer-DkpSK2S1.js";const Le={component:c,title:"Examples/Form",tags:["autodocs"],argTypes:{}},o={args:{},render:()=>{const m=["Banan","Apple","Mango"];return e.jsxs(d,{children:[e.jsx(i,{size:12,children:e.jsx(t,{label:"Ange ditt fullständiga namn",description:"Glöm inte dina eventuella mellannamn!"})}),e.jsx(i,{size:12,children:e.jsx(t,{label:"Personnummmer",description:"Anges på formen ÅÅMMDD-XXXX"})}),e.jsx(i,{size:12,children:e.jsx(l,{label:"Vilken är din favoritfrukt",placeholder:"Välj en frukt",selectionMode:"single",items:m.map(r=>({id:r,name:r})),children:r=>e.jsx(p,{...r,children:r.name})})}),e.jsx(i,{children:e.jsx(a,{children:"Skicka"})})]})}},s={args:{},render:()=>{const m=["A","B","C"],r=["Anledning A","Anledning B","Anledning C"];return e.jsx("div",{children:e.jsxs(d,{children:[e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(x,{label:"Anledning",description:"Ange anledning till att du söker i databasen",children:r.map(n=>e.jsx(u,{value:n,children:n},n))})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(I,{label:"Databas",description:"Välj databas att söka i",children:m.map(n=>e.jsx(G,{value:n,children:n},n))})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Namn",description:""})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Personnummer"})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(l,{label:"Kön",description:"Kan lämnas tomt",placeholder:"Välj kön",selectionMode:"single",items:m.map(n=>({name:n,id:n})),children:n=>e.jsx(p,{...n,children:n.name})})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Ärendekod"})}),e.jsx(i,{size:"auto",children:e.jsx(a,{children:"Sök"})}),e.jsx(i,{size:"auto",children:e.jsx(a,{variant:"secondary",children:"Rensa"})})]})})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
