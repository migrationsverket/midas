import{j as e}from"./iframe-BH1_R2DT.js";import{$ as c}from"./Form-pzlsYeFZ.js";import{G as d}from"./Grid-CWEESwvz.js";import{G as i}from"./GridItem-DO3oAnjx.js";import{T as t}from"./TextField-ClPsWe45.js";import{S as l}from"./Select-BNoqM0U0.js";import{B as a}from"./Button-BnyEfxrm.js";import{R as x,a as u}from"./Radio-c97FGrET.js";import{C as I}from"./CheckboxGroup-9w6mMmjz.js";import{C as G}from"./Checkbox-TCyAUSDm.js";import{L as p}from"./ListBoxItem-HJfRnteI.js";import"./preload-helper-Ct5FWWRu.js";import"./utils-BVGwIGlb.js";import"./clsx-B-dksMZM.js";import"./useFormValidation-DHG-vjBo.js";import"./useFocusRing-D2P1AVxz.js";import"./index-DMDiVxAe.js";import"./index-C_m7skr9.js";import"./clsx-Ciqy0D92.js";import"./TextFieldBase-DPOHTtEy.js";import"./FieldError-BmHCkNY9.js";import"./Text-BSV7h1MS.js";import"./Text-DLnNCVmf.js";import"./RSPContexts-CanWJetA.js";import"./Group-94nBzFEl.js";import"./Input-DvB_hQOU.js";import"./Hidden-kAD8IT6R.js";import"./Button-DaJwfJY_.js";import"./useLabels-D9Se9Q-i.js";import"./useButton-t5IL2t_E.js";import"./useTextField-DNT3vc47.js";import"./useControlledState--SS9_6v3.js";import"./useField-lOybA6ps.js";import"./TextField.module-DGUQcbB9.js";import"./Label-CspW4NxE.js";import"./Dialog-BnkmlJnO.js";import"./OverlayArrow-Mj3Nc_Xo.js";import"./useResizeObserver-jng0sDXo.js";import"./Collection-DtOIcu4C.js";import"./index-CTOdzTcy.js";import"./Separator-Btv4Rur5.js";import"./SelectionManager-CwndZLg0.js";import"./useEvent-DFDc_5v7.js";import"./scrollIntoView-CEB_t1nR.js";import"./SelectionIndicator-CrGJkGxu.js";import"./useDescription-U6ZvYwCQ.js";import"./ListKeyboardDelegate-DvoG7Abx.js";import"./PressResponder-CZoTBrZB.js";import"./useLocalizedStringFormatter-BnhKqSj7.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./getScrollParent-Cf46SMxm.js";import"./VisuallyHidden-CT5D58WX.js";import"./useLocalizedStringFormatter-Crr1T7Lc.js";import"./x-B4Ho-bAi.js";import"./createLucideIcon-ii3gKTw6.js";import"./Heading-DXJmqslE.js";import"./info-BCkrZYxs.js";import"./Popover-B3kX3vf4.js";import"./intlStrings-ZMTSFH_M.js";import"./ListBox-DZZAY-le.js";import"./DragAndDrop-DS-RXM_m.js";import"./inertValue-7GmAWH-V.js";import"./useListState-DC5nVhbF.js";import"./Tag-CWiLgHo8.js";import"./useHighlightSelectionDescription-CqfaCBfz.js";import"./useUpdateEffect-s_uSDnn6.js";import"./useHasTabbableChild-C3lhtxTk.js";import"./chevron-down-BDY4Y_Q0.js";import"./Button.module-CtQ1deO8.js";import"./check-BnBTtibO.js";import"./useToggleState-BHjB5ZHx.js";import"./Virtualizer-B9vZTLdV.js";const Ve={component:c,title:"Examples/Form",tags:["autodocs"],argTypes:{}},o={args:{},render:()=>{const m=["Banan","Apple","Mango"];return e.jsxs(d,{children:[e.jsx(i,{size:12,children:e.jsx(t,{label:"Ange ditt fullständiga namn",description:"Glöm inte dina eventuella mellannamn!"})}),e.jsx(i,{size:12,children:e.jsx(t,{label:"Personnummmer",description:"Anges på formen ÅÅMMDD-XXXX"})}),e.jsx(i,{size:12,children:e.jsx(l,{label:"Vilken är din favoritfrukt",placeholder:"Välj en frukt",selectionMode:"single",items:m.map(r=>({id:r,name:r})),children:r=>e.jsx(p,{...r,children:r.name})})}),e.jsx(i,{children:e.jsx(a,{children:"Skicka"})})]})}},s={args:{},render:()=>{const m=["A","B","C"],r=["Anledning A","Anledning B","Anledning C"];return e.jsx("div",{children:e.jsxs(d,{children:[e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(x,{label:"Anledning",description:"Ange anledning till att du söker i databasen",children:r.map(n=>e.jsx(u,{value:n,children:n},n))})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(I,{label:"Databas",description:"Välj databas att söka i",children:m.map(n=>e.jsx(G,{value:n,children:n},n))})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Namn",description:""})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Personnummer"})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(l,{label:"Kön",description:"Kan lämnas tomt",placeholder:"Välj kön",selectionMode:"single",items:m.map(n=>({name:n,id:n})),children:n=>e.jsx(p,{...n,children:n.name})})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Ärendekod"})}),e.jsx(i,{size:"auto",children:e.jsx(a,{children:"Sök"})}),e.jsx(i,{size:"auto",children:e.jsx(a,{variant:"secondary",children:"Rensa"})})]})})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
}`,...s.parameters?.docs?.source}}};const Xe=["SimpleForm","TwoColumnForm"];export{o as SimpleForm,s as TwoColumnForm,Xe as __namedExportsOrder,Ve as default};
