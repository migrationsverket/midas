import{j as e}from"./iframe-C2syMjcx.js";import{$ as c}from"./Form-CWekTbEA.js";import{G as d}from"./Grid-3y693OxQ.js";import{G as i}from"./GridItem-DIK3rNoz.js";import{T as t}from"./TextField-Bbzha-nV.js";import{S as l}from"./Select-C_Jh-Tbx.js";import{B as a}from"./Button-DFdezlA2.js";import{R as x,a as u}from"./Radio-DkR8tKfl.js";import{C as I}from"./CheckboxGroup-CetsFujJ.js";import{C as G}from"./Checkbox-CCLg0r3b.js";import{L as p}from"./ListBoxItem-pRL6k8QO.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-NPw_IpSj.js";import"./clsx-B-dksMZM.js";import"./useFormValidation-C0k6ZwBy.js";import"./useFocusRing-BTCdOLkE.js";import"./index-kesApnNk.js";import"./index-D9WKceHM.js";import"./clsx-Ciqy0D92.js";import"./TextFieldBase-C-N3YQ7D.js";import"./TextField-BMyTOyE1.js";import"./FieldError-M6Mt7RYl.js";import"./Text-BzSdjjAy.js";import"./Text-CW1-kOgu.js";import"./RSPContexts-Ci-D1ZHy.js";import"./Group-Bivfh974.js";import"./Input-C8oiVkpX.js";import"./Hidden-D_ZXlJ-E.js";import"./Button-q8T4B1eY.js";import"./useLabels-CxTL3OJE.js";import"./useButton-Cq9o22NE.js";import"./useTextField-DggaPNad.js";import"./useControlledState-DcPxF_iu.js";import"./useField-BbLW6q43.js";import"./TextField.module-1-_3qsJZ.js";import"./Label-Cm9jRdUG.js";import"./Dialog-Ck2U7GRd.js";import"./OverlayArrow-Bw2G0Yv9.js";import"./useResizeObserver-B6Yj14gw.js";import"./Collection-CRHEXIAy.js";import"./index-DNcKrBMu.js";import"./Separator-LhPpHbL9.js";import"./SelectionManager-CknCKKPC.js";import"./useEvent-Bb-UgqSL.js";import"./scrollIntoView-CVizm6Yx.js";import"./SelectionIndicator-BLcGl7NH.js";import"./useDescription-DWsDzmTc.js";import"./ListKeyboardDelegate-CMdcFZGB.js";import"./PressResponder-B1kwZgn8.js";import"./useLocalizedStringFormatter-BaZve-XC.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./getScrollParent-BnB7GHRj.js";import"./VisuallyHidden-CT7-H4Xi.js";import"./x-CNQ7hU2a.js";import"./createLucideIcon-Cx2M3zR4.js";import"./useLocalizedStringFormatter-CVow8Wj7.js";import"./Heading-ClhHBRuV.js";import"./info-Radp0Nb7.js";import"./Popover-1V19CavY.js";import"./intlStrings-ZMTSFH_M.js";import"./ListBox-U1xzHfBu.js";import"./DragAndDrop-GrEeUsl0.js";import"./inertValue-BYK-4DNR.js";import"./useListState-sIx4orJV.js";import"./Tag-DbH-wd6R.js";import"./useHighlightSelectionDescription-BAJ0e7DC.js";import"./useUpdateEffect-UcbVK27N.js";import"./useHasTabbableChild-UY09b3J4.js";import"./chevron-down-DQ_BazuN.js";import"./Button.module-CtQ1deO8.js";import"./check-Bd8nDKDE.js";import"./useToggleState-CB-Wm4E4.js";import"./Virtualizer-Cv6CRlIX.js";const Xe={component:c,title:"Examples/Form",tags:["autodocs"],argTypes:{}},o={args:{},render:()=>{const m=["Banan","Apple","Mango"];return e.jsxs(d,{children:[e.jsx(i,{size:12,children:e.jsx(t,{label:"Ange ditt fullständiga namn",description:"Glöm inte dina eventuella mellannamn!"})}),e.jsx(i,{size:12,children:e.jsx(t,{label:"Personnummmer",description:"Anges på formen ÅÅMMDD-XXXX"})}),e.jsx(i,{size:12,children:e.jsx(l,{label:"Vilken är din favoritfrukt",placeholder:"Välj en frukt",selectionMode:"single",items:m.map(r=>({id:r,name:r})),children:r=>e.jsx(p,{...r,children:r.name})})}),e.jsx(i,{children:e.jsx(a,{children:"Skicka"})})]})}},s={args:{},render:()=>{const m=["A","B","C"],r=["Anledning A","Anledning B","Anledning C"];return e.jsx("div",{children:e.jsxs(d,{children:[e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(x,{label:"Anledning",description:"Ange anledning till att du söker i databasen",children:r.map(n=>e.jsx(u,{value:n,children:n},n))})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(I,{label:"Databas",description:"Välj databas att söka i",children:m.map(n=>e.jsx(G,{value:n,children:n},n))})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Namn",description:""})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Personnummer"})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(l,{label:"Kön",description:"Kan lämnas tomt",placeholder:"Välj kön",selectionMode:"single",items:m.map(n=>({name:n,id:n})),children:n=>e.jsx(p,{...n,children:n.name})})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Ärendekod"})}),e.jsx(i,{size:"auto",children:e.jsx(a,{children:"Sök"})}),e.jsx(i,{size:"auto",children:e.jsx(a,{variant:"secondary",children:"Rensa"})})]})})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
