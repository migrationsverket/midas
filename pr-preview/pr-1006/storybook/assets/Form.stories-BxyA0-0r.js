import{j as e}from"./iframe-CSxi486h.js";import{$ as c}from"./Form-vycxbIa7.js";import{G as d}from"./Grid-BrGmn8kI.js";import{G as i}from"./GridItem-BYFhyek9.js";import{T as t}from"./TextField-BiVEMwA7.js";import{S as l}from"./Select-DCVyTME3.js";import{B as a}from"./Button-iQDKHLWN.js";import{R as x,a as u}from"./Radio-tulyCeYp.js";import{C as I}from"./CheckboxGroup-Ct1agCMU.js";import{C as G}from"./Checkbox-C2yUljV9.js";import{L as p}from"./ListBoxItem-D6LrQ98P.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-BzDTrZyA.js";import"./clsx-B-dksMZM.js";import"./useFormValidation-D6gouEPs.js";import"./useFocusRing-RkfB8tx5.js";import"./index-0hY5d2pY.js";import"./index-D8s8gplW.js";import"./clsx-Ciqy0D92.js";import"./TextFieldBase-Czuj-p87.js";import"./TextField-PG-Ged4S.js";import"./FieldError-CGgFGY0t.js";import"./Text-DJ3-XheA.js";import"./Text-KTapkgrB.js";import"./RSPContexts-DQM45vj6.js";import"./Group-CaQzIjag.js";import"./Input-DvPsHmwl.js";import"./Hidden-CGbLzxlP.js";import"./Button-DDo42slW.js";import"./useLabels-ku0pOgJ6.js";import"./useButton-CMpob_a_.js";import"./useTextField-D3QhN7MH.js";import"./useControlledState-DtteSLbz.js";import"./useField-KJZxfhtX.js";import"./TextField.module-CgqiUiYQ.js";import"./Label-BX9fucSG.js";import"./Dialog-GnEu9DKR.js";import"./OverlayArrow-DpU-LYF6.js";import"./useResizeObserver-3FjlZ3dM.js";import"./Collection-BSTiSYw8.js";import"./index-GB43V8eJ.js";import"./Separator-DcGKTPuu.js";import"./SelectionManager-Ach9z1ok.js";import"./useEvent-CI6BS7N3.js";import"./scrollIntoView-CtWAMHuk.js";import"./SelectionIndicator-4DQ1JiJ8.js";import"./useDescription-BVlN4h3o.js";import"./ListKeyboardDelegate-B9cKvqzL.js";import"./PressResponder-DyYothjc.js";import"./useLocalizedStringFormatter-BOm7oqwy.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-ClGvaNRF.js";import"./getScrollParent-Cpn7MDkE.js";import"./VisuallyHidden-z1hnMekp.js";import"./x-uPsz_3EK.js";import"./createLucideIcon-CayTLY9E.js";import"./useLocalizedStringFormatter-DY5vjUoo.js";import"./Heading-CLKVrjeR.js";import"./info-lH0y66bL.js";import"./Popover-CzW9-JSe.js";import"./intlStrings-ZMTSFH_M.js";import"./ListBox-TKf0Xd7F.js";import"./DragAndDrop-DCTUArLo.js";import"./inertValue-CeLnxlbA.js";import"./useListState-RMPOtzW_.js";import"./Tag-BOv3YgQc.js";import"./useHighlightSelectionDescription-DD_X4OHb.js";import"./useUpdateEffect-5hM_hXml.js";import"./useHasTabbableChild-DUMXarjn.js";import"./chevron-down-Cz0Qinu6.js";import"./Button.module-Co5e5YHp.js";import"./check-BNNIX2Cz.js";import"./useToggleState-wKvR8NJq.js";import"./Virtualizer-DNR57u_o.js";const Le={component:c,title:"Examples/Form",tags:["autodocs"],argTypes:{}},o={args:{},render:()=>{const m=["Banan","Apple","Mango"];return e.jsxs(d,{children:[e.jsx(i,{size:12,children:e.jsx(t,{label:"Ange ditt fullständiga namn",description:"Glöm inte dina eventuella mellannamn!"})}),e.jsx(i,{size:12,children:e.jsx(t,{label:"Personnummmer",description:"Anges på formen ÅÅMMDD-XXXX"})}),e.jsx(i,{size:12,children:e.jsx(l,{label:"Vilken är din favoritfrukt",placeholder:"Välj en frukt",selectionMode:"single",items:m.map(r=>({id:r,name:r})),children:r=>e.jsx(p,{...r,children:r.name})})}),e.jsx(i,{children:e.jsx(a,{children:"Skicka"})})]})}},s={args:{},render:()=>{const m=["A","B","C"],r=["Anledning A","Anledning B","Anledning C"];return e.jsx("div",{children:e.jsxs(d,{children:[e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(x,{label:"Anledning",description:"Ange anledning till att du söker i databasen",children:r.map(n=>e.jsx(u,{value:n,children:n},n))})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(I,{label:"Databas",description:"Välj databas att söka i",children:m.map(n=>e.jsx(G,{value:n,children:n},n))})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Namn",description:""})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Personnummer"})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(l,{label:"Kön",description:"Kan lämnas tomt",placeholder:"Välj kön",selectionMode:"single",items:m.map(n=>({name:n,id:n})),children:n=>e.jsx(p,{...n,children:n.name})})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Ärendekod"})}),e.jsx(i,{size:"auto",children:e.jsx(a,{children:"Sök"})}),e.jsx(i,{size:"auto",children:e.jsx(a,{variant:"secondary",children:"Rensa"})})]})})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
