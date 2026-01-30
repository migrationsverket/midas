import{j as e}from"./iframe-CzkIVWu3.js";import{$ as c}from"./Form-DSqWRRTm.js";import{G as d}from"./Grid-q5cu2Nof.js";import{G as i}from"./GridItem-CGSXFNkI.js";import{T as t}from"./TextField-CHWYX8iq.js";import{S as l}from"./Select-o2rK0Pn3.js";import{B as a}from"./Button-DaFIfdKd.js";import{R as x,a as u}from"./Radio-hsChWKQk.js";import{C as I}from"./CheckboxGroup-D_TN4KoC.js";import{C as G}from"./Checkbox-Bz-RWR1B.js";import{L as p}from"./ListBoxItem-CIzt3u_8.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-DZrNC9W-.js";import"./clsx-B-dksMZM.js";import"./useFormValidation-PxMK62x-.js";import"./useFocusRing-m88TTZQ1.js";import"./index-B4Y469Zs.js";import"./index-CS5avNyc.js";import"./clsx-Ciqy0D92.js";import"./TextFieldBase-SZasjjEj.js";import"./TextField-Du_D0lPL.js";import"./FieldError-BfaONkuD.js";import"./Text-SOVw6BD9.js";import"./Text-DYfagpWy.js";import"./RSPContexts-BCM-zQK8.js";import"./Group-DfUTtcjK.js";import"./Input-BiMb4Sck.js";import"./Hidden-D7FrmOoe.js";import"./Button-DhtFINKQ.js";import"./useLabels-Dsf3Sz-Y.js";import"./useButton-Bky5JxvW.js";import"./useTextField-BmmMvCiW.js";import"./useControlledState-Cna3kncS.js";import"./useField-Ds0Z1Igf.js";import"./TextField.module-1fNSVGjT.js";import"./Label-zYI1t4se.js";import"./Dialog-CmVHG6Nt.js";import"./OverlayArrow-BqFsu7F7.js";import"./useResizeObserver-BfmVivxN.js";import"./Collection-BL35lM_F.js";import"./index-DT3i1LOp.js";import"./Separator-BIS6Gc1n.js";import"./SelectionManager-Dq4NnlAM.js";import"./useEvent-BUHVKPgO.js";import"./scrollIntoView-CtWAMHuk.js";import"./SelectionIndicator-CyeKwJf3.js";import"./useDescription-WzmBOmwR.js";import"./ListKeyboardDelegate-DoMDUw9w.js";import"./PressResponder-C3UJPuJX.js";import"./useLocalizedStringFormatter-Bj-fK2b0.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-BDmgZWW5.js";import"./getScrollParent-Cpn7MDkE.js";import"./VisuallyHidden-C9fSBHBW.js";import"./x-Dvr9Mgrq.js";import"./createLucideIcon-DxsLAk9T.js";import"./useLocalizedStringFormatter-YJ9MX6im.js";import"./Heading-5uV_oDOE.js";import"./info-D-iyIp5E.js";import"./Popover-CP3cpvpy.js";import"./intlStrings-ZMTSFH_M.js";import"./ListBox-azecEVYG.js";import"./DragAndDrop-CeuZFIPR.js";import"./inertValue-Cu40GS-V.js";import"./useListState-D-SVdo40.js";import"./Tag-BqWC9O07.js";import"./useHighlightSelectionDescription-CkefVCKb.js";import"./useUpdateEffect-CfWPrZul.js";import"./useHasTabbableChild-Du6y55PN.js";import"./chevron-down-DPeKLiI6.js";import"./Button.module-Co5e5YHp.js";import"./check-D-m1WARu.js";import"./useToggleState-Coqgl6z4.js";import"./Virtualizer-y0EpgGkD.js";const Le={component:c,title:"Examples/Form",tags:["autodocs"],argTypes:{}},o={args:{},render:()=>{const m=["Banan","Apple","Mango"];return e.jsxs(d,{children:[e.jsx(i,{size:12,children:e.jsx(t,{label:"Ange ditt fullständiga namn",description:"Glöm inte dina eventuella mellannamn!"})}),e.jsx(i,{size:12,children:e.jsx(t,{label:"Personnummmer",description:"Anges på formen ÅÅMMDD-XXXX"})}),e.jsx(i,{size:12,children:e.jsx(l,{label:"Vilken är din favoritfrukt",placeholder:"Välj en frukt",selectionMode:"single",items:m.map(r=>({id:r,name:r})),children:r=>e.jsx(p,{...r,children:r.name})})}),e.jsx(i,{children:e.jsx(a,{children:"Skicka"})})]})}},s={args:{},render:()=>{const m=["A","B","C"],r=["Anledning A","Anledning B","Anledning C"];return e.jsx("div",{children:e.jsxs(d,{children:[e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(x,{label:"Anledning",description:"Ange anledning till att du söker i databasen",children:r.map(n=>e.jsx(u,{value:n,children:n},n))})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(I,{label:"Databas",description:"Välj databas att söka i",children:m.map(n=>e.jsx(G,{value:n,children:n},n))})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Namn",description:""})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Personnummer"})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(l,{label:"Kön",description:"Kan lämnas tomt",placeholder:"Välj kön",selectionMode:"single",items:m.map(n=>({name:n,id:n})),children:n=>e.jsx(p,{...n,children:n.name})})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Ärendekod"})}),e.jsx(i,{size:"auto",children:e.jsx(a,{children:"Sök"})}),e.jsx(i,{size:"auto",children:e.jsx(a,{variant:"secondary",children:"Rensa"})})]})})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
