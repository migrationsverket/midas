import{j as e}from"./iframe-Bu5WN3Ef.js";import{$ as c}from"./Form-DCuhHodC.js";import{G as d}from"./Grid-Cl1CPGOP.js";import{G as i}from"./GridItem-B7aVyL5f.js";import{T as t}from"./TextField-Crfkg1ap.js";import{S as l}from"./Select-DYVhT6l1.js";import{B as a}from"./Button-CsD82h12.js";import{R as x,a as u}from"./Radio-Dj6x77bx.js";import{C as I}from"./CheckboxGroup-BHNeZtyv.js";import{C as G}from"./Checkbox-BcaYdpy6.js";import{L as p}from"./ListBoxItem-C7b2G7Iw.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-BiJWA_3V.js";import"./clsx-B-dksMZM.js";import"./useFormValidation-Bml2n-Y0.js";import"./useFocusRing-MCCMWjEG.js";import"./index-DaK77TxT.js";import"./index-pKua8EdO.js";import"./clsx-Ciqy0D92.js";import"./TextFieldBase-C7pe8TIc.js";import"./TextField-BiIMN0t8.js";import"./FieldError-DLBMclUE.js";import"./Text-D6NDkbQ-.js";import"./Text-CSy2wCTo.js";import"./RSPContexts-DaEwdkBS.js";import"./Group-Br6p2Hrq.js";import"./Input-DKKUDMsm.js";import"./Hidden-D12ThQaa.js";import"./Button-CHgLdR4q.js";import"./useLabels-B6cgoF5h.js";import"./useButton-CWrQWViA.js";import"./useTextField-CgTyDUfI.js";import"./useControlledState-1KPKbDQX.js";import"./useField-Ceb9wNF7.js";import"./TextField.module-CgqiUiYQ.js";import"./Label-BmoUrNGl.js";import"./Dialog-Br_pB8XJ.js";import"./OverlayArrow-CCMeLBLs.js";import"./useResizeObserver-iBP-rbkk.js";import"./Collection-D1vejPdr.js";import"./index-DXrJiyJL.js";import"./Separator-COKc5nQC.js";import"./SelectionManager-BfluCVju.js";import"./useEvent-xlEcSicO.js";import"./scrollIntoView-CtWAMHuk.js";import"./SelectionIndicator-BikYw6fj.js";import"./useDescription-DwXInZjk.js";import"./ListKeyboardDelegate-BUkeqVgS.js";import"./PressResponder-BYMECfUR.js";import"./useLocalizedStringFormatter-XgHPCMNy.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-Dg2E1Ntk.js";import"./getScrollParent-Cpn7MDkE.js";import"./VisuallyHidden-B0tGfuXD.js";import"./x-CpFc5-1x.js";import"./createLucideIcon-CT9OvTIw.js";import"./useLocalizedStringFormatter-DyFvLZVg.js";import"./Heading-CP5wYQUY.js";import"./info-CC9rluUV.js";import"./Popover-baXZnlHo.js";import"./intlStrings-ZMTSFH_M.js";import"./ListBox-Ct5vTqmY.js";import"./DragAndDrop-D0_NAXnH.js";import"./inertValue-mIqHmp58.js";import"./useListState-DULSgkM_.js";import"./Tag-BJNtpPjp.js";import"./useHighlightSelectionDescription-BrPyg27G.js";import"./useUpdateEffect-BiGm_wuD.js";import"./useHasTabbableChild-DLzo9s2-.js";import"./chevron-down-DWwGN-b7.js";import"./Button.module-Co5e5YHp.js";import"./check-CRVDqKUQ.js";import"./useToggleState-Oxr_1iiw.js";import"./Virtualizer-CynJNgts.js";const Le={component:c,title:"Examples/Form",tags:["autodocs"],argTypes:{}},o={args:{},render:()=>{const m=["Banan","Apple","Mango"];return e.jsxs(d,{children:[e.jsx(i,{size:12,children:e.jsx(t,{label:"Ange ditt fullständiga namn",description:"Glöm inte dina eventuella mellannamn!"})}),e.jsx(i,{size:12,children:e.jsx(t,{label:"Personnummmer",description:"Anges på formen ÅÅMMDD-XXXX"})}),e.jsx(i,{size:12,children:e.jsx(l,{label:"Vilken är din favoritfrukt",placeholder:"Välj en frukt",selectionMode:"single",items:m.map(r=>({id:r,name:r})),children:r=>e.jsx(p,{...r,children:r.name})})}),e.jsx(i,{children:e.jsx(a,{children:"Skicka"})})]})}},s={args:{},render:()=>{const m=["A","B","C"],r=["Anledning A","Anledning B","Anledning C"];return e.jsx("div",{children:e.jsxs(d,{children:[e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(x,{label:"Anledning",description:"Ange anledning till att du söker i databasen",children:r.map(n=>e.jsx(u,{value:n,children:n},n))})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(I,{label:"Databas",description:"Välj databas att söka i",children:m.map(n=>e.jsx(G,{value:n,children:n},n))})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Namn",description:""})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Personnummer"})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(l,{label:"Kön",description:"Kan lämnas tomt",placeholder:"Välj kön",selectionMode:"single",items:m.map(n=>({name:n,id:n})),children:n=>e.jsx(p,{...n,children:n.name})})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Ärendekod"})}),e.jsx(i,{size:"auto",children:e.jsx(a,{children:"Sök"})}),e.jsx(i,{size:"auto",children:e.jsx(a,{variant:"secondary",children:"Rensa"})})]})})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
