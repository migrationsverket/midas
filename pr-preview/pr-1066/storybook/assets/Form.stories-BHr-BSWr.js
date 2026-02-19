import{j as e}from"./iframe-BWxdoVbq.js";import{$ as c}from"./Form-BPid_5N5.js";import{G as d}from"./Grid-DZsJA3c1.js";import{G as i}from"./GridItem-BhRj6Iqp.js";import{a as x,R as u}from"./Radio-DnUKyP0G.js";import{C as I}from"./CheckboxGroup-BkTBfadG.js";import{C as G}from"./Checkbox-NxbfHqUd.js";import{T as t}from"./TextField-11ZQ5sLf.js";import{S as l}from"./Select-CUTwl3a0.js";import{L as p}from"./ListBoxItem-Dy-Z3icW.js";import{B as a}from"./Button-DObiC3sf.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-BnYb9Hw4.js";import"./clsx-B-dksMZM.js";import"./useFormValidation-DNc0NnIZ.js";import"./useFocusRing-DPldp525.js";import"./index-DG33oO9s.js";import"./index-DTDl1n2p.js";import"./clsx-Ciqy0D92.js";import"./Group-Nf5xTQKI.js";import"./FieldError-CxzGL3jS.js";import"./Text-dn5dCY6n.js";import"./Text-DGZxErjX.js";import"./Button-ccQsUA8n.js";import"./Hidden-Cxs9AA6g.js";import"./useLabels-CAVv4we_.js";import"./useButton-CdcPrfen.js";import"./SelectionIndicator-oTm2G6Fh.js";import"./useField-DHj-Ewwt.js";import"./VisuallyHidden-Sp8_SWOf.js";import"./useControlledState-FuJuatlB.js";import"./Label-CLB1tHyl.js";import"./Dialog-DhP15DIK.js";import"./RSPContexts-Dux4Wkx7.js";import"./OverlayArrow-BY3LyeC7.js";import"./useResizeObserver-CTUsI4k8.js";import"./Collection-2_PO0O5b.js";import"./index-D_mW35hG.js";import"./Separator-CCq7NZc6.js";import"./SelectionManager-CdbwfAoN.js";import"./useEvent-y-8iBWin.js";import"./scrollIntoView-CtWAMHuk.js";import"./useDescription-DgM0dtj0.js";import"./ListKeyboardDelegate-DQTFuCE0.js";import"./PressResponder-B3LKxLIx.js";import"./useLocalizedStringFormatter-CqDQSu3W.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-CC4XGFMH.js";import"./getScrollParent-Cpn7MDkE.js";import"./x-BJpOH67y.js";import"./createLucideIcon-BPWVcFpY.js";import"./useLocalizedStringFormatter-DEH2FHS3.js";import"./Heading-CeJPd17r.js";import"./info-CZ3e5W5E.js";import"./Popover-Z6vSNCr_.js";import"./check-l2j-1phP.js";import"./useToggleState-CTzyQdPw.js";import"./TextFieldBase-Z0XICiXf.js";import"./Input-C4YB48n9.js";import"./useTextField-DP8Mhr5R.js";import"./TextField.module-DBQiRr7K.js";import"./intlStrings-ZMTSFH_M.js";import"./ListBox-ByNf7gEN.js";import"./DragAndDrop-CL3LOqZF.js";import"./inertValue-CJ274lu9.js";import"./useListState-NOhkNb1d.js";import"./TagGroup-BnPvTv2F.js";import"./useHighlightSelectionDescription-DEY3zCd_.js";import"./useUpdateEffect-20oDDNkr.js";import"./useHasTabbableChild-Cc7R3Rqf.js";import"./chevron-down-BqYyjnOW.js";import"./Virtualizer-CYlpYNMM.js";import"./Button.module-Co5e5YHp.js";const Xe={component:c,title:"Examples/Form",tags:["autodocs"],argTypes:{}},o={args:{},render:()=>{const m=["Banan","Apple","Mango"];return e.jsxs(d,{children:[e.jsx(i,{size:12,children:e.jsx(t,{label:"Ange ditt fullständiga namn",description:"Glöm inte dina eventuella mellannamn!"})}),e.jsx(i,{size:12,children:e.jsx(t,{label:"Personnummmer",description:"Anges på formen ÅÅMMDD-XXXX"})}),e.jsx(i,{size:12,children:e.jsx(l,{label:"Vilken är din favoritfrukt",placeholder:"Välj en frukt",selectionMode:"single",items:m.map(r=>({id:r,name:r})),children:r=>e.jsx(p,{...r,children:r.name})})}),e.jsx(i,{children:e.jsx(a,{children:"Skicka"})})]})}},s={args:{},render:()=>{const m=["A","B","C"],r=["Anledning A","Anledning B","Anledning C"];return e.jsx("div",{children:e.jsxs(d,{children:[e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(x,{label:"Anledning",description:"Ange anledning till att du söker i databasen",children:r.map(n=>e.jsx(u,{value:n,children:n},n))})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(I,{label:"Databas",description:"Välj databas att söka i",children:m.map(n=>e.jsx(G,{value:n,children:n},n))})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Namn",description:""})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Personnummer"})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(l,{label:"Kön",description:"Kan lämnas tomt",placeholder:"Välj kön",selectionMode:"single",items:m.map(n=>({name:n,id:n})),children:n=>e.jsx(p,{...n,children:n.name})})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Ärendekod"})}),e.jsx(i,{size:"auto",children:e.jsx(a,{children:"Sök"})}),e.jsx(i,{size:"auto",children:e.jsx(a,{variant:"secondary",children:"Rensa"})})]})})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
