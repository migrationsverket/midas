import{j as e}from"./iframe-gVQjPewL.js";import{$ as c}from"./Form-DwiLB2NL.js";import{G as d}from"./Grid-DZQdEdkN.js";import{G as i}from"./GridItem-Zk-eywOG.js";import{T as t}from"./TextField-EmzyOJrL.js";import{S as l}from"./Select-TwljRqu7.js";import{B as a}from"./Button-DzhpmtPX.js";import{R as x,a as u}from"./Radio-BisOgYlQ.js";import{C as I}from"./CheckboxGroup-BvUB2mpJ.js";import{C as G}from"./Checkbox-DCwYLIXC.js";import{L as p}from"./ListBoxItem-BuEqP0KW.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-BAvziVQG.js";import"./clsx-B-dksMZM.js";import"./useFormValidation-DAmYnyK_.js";import"./useFocusRing-0gBgE6N-.js";import"./index-ndXt9Dvv.js";import"./index-Dx6mXqSO.js";import"./clsx-Ciqy0D92.js";import"./TextFieldBase-B-e1BxLk.js";import"./TextField-CdGSCmlD.js";import"./FieldError-vZRBOpgn.js";import"./Text-D78Bknv4.js";import"./Text-_RjAag-Y.js";import"./RSPContexts-Da-6GabZ.js";import"./Group-ClUs6YJY.js";import"./Input-7gZ7Empj.js";import"./Hidden-B8SjbVEJ.js";import"./Button-omCgwxDS.js";import"./useLabels-BGa4lReX.js";import"./useButton-ChaUza1w.js";import"./useTextField-CcqmoEQl.js";import"./useControlledState-CoTiLeJu.js";import"./useField-RqV4mzqX.js";import"./TextField.module-CgqiUiYQ.js";import"./Label-BUHH8Ryl.js";import"./Dialog-C0tGSwX3.js";import"./OverlayArrow-BLQYyuMb.js";import"./useResizeObserver-DtDkwZpF.js";import"./Collection-Tbuv4AUC.js";import"./index-Co4Ynxvq.js";import"./Separator-wq4hVWRB.js";import"./SelectionManager-BOfgwwz1.js";import"./useEvent-BImc7z2-.js";import"./scrollIntoView-CxAjrn7U.js";import"./SelectionIndicator-UruU7uTK.js";import"./useDescription-C3xQRC9U.js";import"./ListKeyboardDelegate-DnXYb1bk.js";import"./PressResponder-DVQzaKkb.js";import"./useLocalizedStringFormatter-CGcpvzuT.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./getScrollParent-BY51pk5z.js";import"./VisuallyHidden-DHQLCAYC.js";import"./x-CTE2CY3u.js";import"./createLucideIcon-BtoTmTD-.js";import"./useLocalizedStringFormatter-DgH8u-_G.js";import"./Heading-CxRtLCg3.js";import"./info-BqWam_su.js";import"./Popover-DPFzvXf6.js";import"./intlStrings-ZMTSFH_M.js";import"./ListBox-BcqvXX0A.js";import"./DragAndDrop-DChnShWj.js";import"./inertValue-DwWpSGgl.js";import"./useListState-DuqRiOmQ.js";import"./Tag-veIjrDui.js";import"./useHighlightSelectionDescription-kS7SoVCh.js";import"./useUpdateEffect-JVW9U-r8.js";import"./useHasTabbableChild-rUj2u8Cj.js";import"./chevron-down-tJAWg3Bi.js";import"./Button.module-Co5e5YHp.js";import"./check-BFD7ctPA.js";import"./useToggleState-BSxRch46.js";import"./Virtualizer-D_6Jw0gO.js";const Xe={component:c,title:"Examples/Form",tags:["autodocs"],argTypes:{}},o={args:{},render:()=>{const m=["Banan","Apple","Mango"];return e.jsxs(d,{children:[e.jsx(i,{size:12,children:e.jsx(t,{label:"Ange ditt fullständiga namn",description:"Glöm inte dina eventuella mellannamn!"})}),e.jsx(i,{size:12,children:e.jsx(t,{label:"Personnummmer",description:"Anges på formen ÅÅMMDD-XXXX"})}),e.jsx(i,{size:12,children:e.jsx(l,{label:"Vilken är din favoritfrukt",placeholder:"Välj en frukt",selectionMode:"single",items:m.map(r=>({id:r,name:r})),children:r=>e.jsx(p,{...r,children:r.name})})}),e.jsx(i,{children:e.jsx(a,{children:"Skicka"})})]})}},s={args:{},render:()=>{const m=["A","B","C"],r=["Anledning A","Anledning B","Anledning C"];return e.jsx("div",{children:e.jsxs(d,{children:[e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(x,{label:"Anledning",description:"Ange anledning till att du söker i databasen",children:r.map(n=>e.jsx(u,{value:n,children:n},n))})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(I,{label:"Databas",description:"Välj databas att söka i",children:m.map(n=>e.jsx(G,{value:n,children:n},n))})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Namn",description:""})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Personnummer"})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(l,{label:"Kön",description:"Kan lämnas tomt",placeholder:"Välj kön",selectionMode:"single",items:m.map(n=>({name:n,id:n})),children:n=>e.jsx(p,{...n,children:n.name})})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Ärendekod"})}),e.jsx(i,{size:"auto",children:e.jsx(a,{children:"Sök"})}),e.jsx(i,{size:"auto",children:e.jsx(a,{variant:"secondary",children:"Rensa"})})]})})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
