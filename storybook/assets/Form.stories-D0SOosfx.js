import{j as e}from"./iframe-Dtb7hqk6.js";import{c}from"./Form-Cgua6hQf.js";import{G as d}from"./Grid-B7O5RT_3.js";import{G as i}from"./GridItem-Bn7OsgFG.js";import{a as x,R as u}from"./Radio-BLFljsvy.js";import{C as I}from"./CheckboxGroup-BxgEh061.js";import{C as G}from"./Checkbox-BtYhtucg.js";import{T as t}from"./TextField-D4EDsAAX.js";import{S as l}from"./Select-Bz5BU3jW.js";import{L as p}from"./ListBoxItem-De_j_O8l.js";import{B as a}from"./Button-CgYfRdd2.js";import"./preload-helper-PPVm8Dsz.js";import"./useFocusRing-RCYgGSJe.js";import"./utils-DwGYJ0wo.js";import"./clsx-B-dksMZM.js";import"./index-VDhw-r5F.js";import"./index-BaORL6uX.js";import"./clsx-Ciqy0D92.js";import"./Group-C8i1Lk7e.js";import"./FieldError-CymQbIva.js";import"./Text-Dub-joLT.js";import"./Text-wLzVGxAi.js";import"./Button-BTwY4tVw.js";import"./Hidden-DQwBNi6i.js";import"./useLabel-D9hpHeoi.js";import"./useLabels-DiO75QpW.js";import"./useButton-D8LV6Lrl.js";import"./SelectionIndicator-CI77rCMa.js";import"./useField-BGrWgRXS.js";import"./VisuallyHidden-BB5g-TMV.js";import"./useControlledState-B0XIHWrT.js";import"./Label-Bed8VhVZ.js";import"./Dialog-C-AlgTuC.js";import"./RSPContexts-BRMTqOVY.js";import"./OverlayArrow-BjZbWS1M.js";import"./useResizeObserver-Ck20i0Zq.js";import"./Collection-BD38zrZ2.js";import"./index--ZHyBOuJ.js";import"./Separator-BuMeoZ_r.js";import"./SelectionManager-LaKed2sG.js";import"./useEvent-CrQdtEE9.js";import"./scrollIntoView-1v2Kx20c.js";import"./useDescription-BRXkpFwc.js";import"./ListKeyboardDelegate-C7bJgaTj.js";import"./PressResponder-B2KeLg43.js";import"./useLocalizedStringFormatter-imoO5bwq.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-DCOTFe1W.js";import"./getScrollParent-DsHrkiO1.js";import"./ModalOverlay-GQ2O729M.js";import"./x-BPYm2e-6.js";import"./createLucideIcon-CMh4hIEg.js";import"./useLocalizedStringFormatter-BZzFMzpp.js";import"./Heading-pmehtflV.js";import"./info-QxePBk5N.js";import"./Popover-CnnSplSw.js";import"./check-BdZYtbDL.js";import"./useToggleState-CDHOnc1N.js";import"./TextFieldBase-CCWTRSOY.js";import"./Input-CEKUG48_.js";import"./useTextField-BZdcatsz.js";import"./TextField.module-DdivwlC8.js";import"./intlStrings-ZMTSFH_M.js";import"./ListBox-DEdMahuS.js";import"./DragAndDrop-gxF0AoEK.js";import"./inertValue-CqWnCzhT.js";import"./useListState-DvHBPbHq.js";import"./TagGroup-C6xd27tS.js";import"./useHighlightSelectionDescription-BA-IRzZr.js";import"./useUpdateEffect-DGI-u_7Q.js";import"./useHasTabbableChild-CyJEC-RE.js";import"./chevron-down-Dn03rEZW.js";import"./Virtualizer-hjRbMIF0.js";import"./Button.module-BB7N-cLd.js";const Le={component:c,title:"Examples/Form",tags:["autodocs"],argTypes:{}},o={args:{},render:()=>{const m=["Banan","Apple","Mango"];return e.jsxs(d,{children:[e.jsx(i,{size:12,children:e.jsx(t,{label:"Ange ditt fullständiga namn",description:"Glöm inte dina eventuella mellannamn!"})}),e.jsx(i,{size:12,children:e.jsx(t,{label:"Personnummmer",description:"Anges på formen ÅÅMMDD-XXXX"})}),e.jsx(i,{size:12,children:e.jsx(l,{label:"Vilken är din favoritfrukt",placeholder:"Välj en frukt",selectionMode:"single",items:m.map(r=>({id:r,name:r})),children:r=>e.jsx(p,{...r,children:r.name})})}),e.jsx(i,{children:e.jsx(a,{children:"Skicka"})})]})}},s={args:{},render:()=>{const m=["A","B","C"],r=["Anledning A","Anledning B","Anledning C"];return e.jsx("div",{children:e.jsxs(d,{children:[e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(x,{label:"Anledning",description:"Ange anledning till att du söker i databasen",children:r.map(n=>e.jsx(u,{value:n,children:n},n))})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(I,{label:"Databas",description:"Välj databas att söka i",children:m.map(n=>e.jsx(G,{value:n,children:n},n))})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Namn",description:""})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Personnummer"})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(l,{label:"Kön",description:"Kan lämnas tomt",placeholder:"Välj kön",selectionMode:"single",items:m.map(n=>({name:n,id:n})),children:n=>e.jsx(p,{...n,children:n.name})})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Ärendekod"})}),e.jsx(i,{size:"auto",children:e.jsx(a,{children:"Sök"})}),e.jsx(i,{size:"auto",children:e.jsx(a,{variant:"secondary",children:"Rensa"})})]})})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
