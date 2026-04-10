import{j as e}from"./iframe--DNH3aGV.js";import{c}from"./Form-DPDs5zEL.js";import{G as d}from"./Grid-CrxhwnzS.js";import{G as i}from"./GridItem-DdNJ2fzm.js";import{a as x,R as u}from"./Radio-CXo9yEoO.js";import{C as I}from"./CheckboxGroup-BE3Grs0W.js";import{C as G}from"./Checkbox-DekdR4Ty.js";import{T as t}from"./TextField-6XOrCOT-.js";import{S as l}from"./Select-DvF6sU_F.js";import{L as p}from"./ListBoxItem-CQl8g-Yp.js";import{B as a}from"./Button-k3ORVpm3.js";import"./preload-helper-PPVm8Dsz.js";import"./useFocusRing-COgihC8f.js";import"./utils-0GaImV3w.js";import"./clsx-B-dksMZM.js";import"./index-BdkFEYWR.js";import"./index-DalW6cey.js";import"./clsx-Ciqy0D92.js";import"./Group-CRL_tLBo.js";import"./FieldError-WqsNiK7P.js";import"./Text-BBvcfJf4.js";import"./Text-c4OCYkd3.js";import"./Button-BsANfNMy.js";import"./Hidden-DGctFygB.js";import"./useLabel-CkI0hnox.js";import"./useLabels-C8J0Cx0Y.js";import"./useButton-Cnfu5-B9.js";import"./SelectionIndicator-xlkanYoJ.js";import"./useField-CEYiaukY.js";import"./VisuallyHidden-CF-eQG1L.js";import"./useControlledState-D7Iw9EWv.js";import"./Label-BUFtwjtj.js";import"./Dialog-BuI7mqzP.js";import"./RSPContexts-D_qB4YUz.js";import"./OverlayArrow-DEHvFxEE.js";import"./useResizeObserver-0xIpAXxn.js";import"./Collection-c75W7817.js";import"./index-B8zmV9cI.js";import"./Separator-CAHxO_QM.js";import"./SelectionManager-DX4q2rcR.js";import"./useEvent-CIz9Num3.js";import"./scrollIntoView-B9vl4vKk.js";import"./useDescription-DPccdWs0.js";import"./ListKeyboardDelegate-Bz-YKD5w.js";import"./PressResponder-CtHeK3zV.js";import"./useLocalizedStringFormatter-BrEpEIAl.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-B-xh-KTH.js";import"./getScrollParent-DKElYBV4.js";import"./Modal-C9BskyQI.js";import"./x-DQhZrA3s.js";import"./createLucideIcon-GK2uHeXX.js";import"./useLocalizedStringFormatter-DOUyl0Wg.js";import"./Heading-OJ--_RD7.js";import"./info-Dhpjt_KU.js";import"./Popover-DVi_-EjZ.js";import"./check-L1rWu4pv.js";import"./useToggleState-wW4hLcpO.js";import"./TextFieldBase-CqTNWv9N.js";import"./Input-C3-sIc-5.js";import"./useTextField-C1_wCBkw.js";import"./TextField.module-DdivwlC8.js";import"./intlStrings-ZMTSFH_M.js";import"./ListBox--WTJlOKk.js";import"./DragAndDrop-BnX4onGa.js";import"./inertValue-euBpb4uV.js";import"./useListState-D7p9s6TT.js";import"./TagGroup-DvPSqSTn.js";import"./useHighlightSelectionDescription-BRvSB1zI.js";import"./useUpdateEffect-B_CMR2Ja.js";import"./useHasTabbableChild-nFA8ExFE.js";import"./chevron-down-Du051sYT.js";import"./Virtualizer-G6bGCcWt.js";import"./Button.module-BB7N-cLd.js";const Le={component:c,title:"Examples/Form",tags:["autodocs"],argTypes:{}},o={args:{},render:()=>{const m=["Banan","Apple","Mango"];return e.jsxs(d,{children:[e.jsx(i,{size:12,children:e.jsx(t,{label:"Ange ditt fullständiga namn",description:"Glöm inte dina eventuella mellannamn!"})}),e.jsx(i,{size:12,children:e.jsx(t,{label:"Personnummmer",description:"Anges på formen ÅÅMMDD-XXXX"})}),e.jsx(i,{size:12,children:e.jsx(l,{label:"Vilken är din favoritfrukt",placeholder:"Välj en frukt",selectionMode:"single",items:m.map(r=>({id:r,name:r})),children:r=>e.jsx(p,{...r,children:r.name})})}),e.jsx(i,{children:e.jsx(a,{children:"Skicka"})})]})}},s={args:{},render:()=>{const m=["A","B","C"],r=["Anledning A","Anledning B","Anledning C"];return e.jsx("div",{children:e.jsxs(d,{children:[e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(x,{label:"Anledning",description:"Ange anledning till att du söker i databasen",children:r.map(n=>e.jsx(u,{value:n,children:n},n))})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(I,{label:"Databas",description:"Välj databas att söka i",children:m.map(n=>e.jsx(G,{value:n,children:n},n))})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Namn",description:""})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Personnummer"})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(l,{label:"Kön",description:"Kan lämnas tomt",placeholder:"Välj kön",selectionMode:"single",items:m.map(n=>({name:n,id:n})),children:n=>e.jsx(p,{...n,children:n.name})})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Ärendekod"})}),e.jsx(i,{size:"auto",children:e.jsx(a,{children:"Sök"})}),e.jsx(i,{size:"auto",children:e.jsx(a,{variant:"secondary",children:"Rensa"})})]})})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
