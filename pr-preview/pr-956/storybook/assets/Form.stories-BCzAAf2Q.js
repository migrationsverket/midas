import{j as e}from"./iframe-B7hDXu73.js";import{$ as c}from"./Form-x_Q-7jN5.js";import{G as d}from"./Grid-DWAhLJ1U.js";import{G as i}from"./GridItem-DEW75GjW.js";import{T as t}from"./TextField-B4CLIqz1.js";import{S as l}from"./Select-DhvllrV2.js";import{B as a}from"./Button-BsMsUWps.js";import{R as x,a as u}from"./Radio-C2NN4tJv.js";import{C as I}from"./CheckboxGroup-EKm0Q23Y.js";import{C as G}from"./Checkbox-3fmbVWmi.js";import{L as p}from"./ListBoxItem-PwRKNY_x.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-s99TFDuF.js";import"./clsx-B-dksMZM.js";import"./useFormValidation-Cn0cVSSL.js";import"./useFocusRing-Dv3iYYgG.js";import"./index-jtS56rqd.js";import"./index-MHJ3wPjc.js";import"./clsx-Ciqy0D92.js";import"./TextFieldBase-B24UebE6.js";import"./TextField-BlckFduf.js";import"./FieldError-D2xIq2H5.js";import"./Text-DttWi8Qf.js";import"./Text-5DcUl_uA.js";import"./RSPContexts-D-pV6XVu.js";import"./Group-BF_W-hFN.js";import"./Input-CvEs20Us.js";import"./Hidden-DGzhCWQ1.js";import"./Button-Cy0FA1OU.js";import"./useLabels-CckQevmM.js";import"./useButton-DUq9O1mu.js";import"./useTextField-ChXK9s-Q.js";import"./useControlledState-BSmwjkMx.js";import"./useField-x2fx2wbQ.js";import"./TextField.module-1-_3qsJZ.js";import"./Label-BVpi5evz.js";import"./Dialog-D7WVmW3D.js";import"./OverlayArrow-BPyw9L3V.js";import"./useResizeObserver-BlbhWwzq.js";import"./Collection-D1kRXIX7.js";import"./index-Cq3kstT8.js";import"./Separator-BAEFzls3.js";import"./SelectionManager-DbQQVh2M.js";import"./useEvent-mDoXMvId.js";import"./scrollIntoView-CtdKJbJH.js";import"./SelectionIndicator-CZyV3WOQ.js";import"./useDescription-CA2-cW-Y.js";import"./ListKeyboardDelegate-If2PEUdT.js";import"./PressResponder-Mw50seMG.js";import"./useLocalizedStringFormatter-CvfchuRE.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./getScrollParent-DC3qewbQ.js";import"./VisuallyHidden-v1Q3RFjC.js";import"./x-BbN9cWvI.js";import"./createLucideIcon-DGjDO6gh.js";import"./useLocalizedStringFormatter-Dp6ByE82.js";import"./Heading-Xp0eoec4.js";import"./info-4j0bTFmg.js";import"./Popover-D5FRB7OC.js";import"./intlStrings-ZMTSFH_M.js";import"./ListBox-D8c4knsC.js";import"./DragAndDrop-DstdG6KP.js";import"./inertValue-C8a5okAh.js";import"./useListState-ByZjhRBS.js";import"./Tag-CNo6Mdfx.js";import"./useHighlightSelectionDescription-oF5h9AOq.js";import"./useUpdateEffect-BprncRqn.js";import"./useHasTabbableChild-BLnfR5D_.js";import"./chevron-down-D1bk1CnI.js";import"./Button.module-CtQ1deO8.js";import"./check-BMiTIE34.js";import"./useToggleState-Cn-DVgaB.js";import"./Virtualizer-BhWJe7UJ.js";const Xe={component:c,title:"Examples/Form",tags:["autodocs"],argTypes:{}},o={args:{},render:()=>{const m=["Banan","Apple","Mango"];return e.jsxs(d,{children:[e.jsx(i,{size:12,children:e.jsx(t,{label:"Ange ditt fullständiga namn",description:"Glöm inte dina eventuella mellannamn!"})}),e.jsx(i,{size:12,children:e.jsx(t,{label:"Personnummmer",description:"Anges på formen ÅÅMMDD-XXXX"})}),e.jsx(i,{size:12,children:e.jsx(l,{label:"Vilken är din favoritfrukt",placeholder:"Välj en frukt",selectionMode:"single",items:m.map(r=>({id:r,name:r})),children:r=>e.jsx(p,{...r,children:r.name})})}),e.jsx(i,{children:e.jsx(a,{children:"Skicka"})})]})}},s={args:{},render:()=>{const m=["A","B","C"],r=["Anledning A","Anledning B","Anledning C"];return e.jsx("div",{children:e.jsxs(d,{children:[e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(x,{label:"Anledning",description:"Ange anledning till att du söker i databasen",children:r.map(n=>e.jsx(u,{value:n,children:n},n))})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(I,{label:"Databas",description:"Välj databas att söka i",children:m.map(n=>e.jsx(G,{value:n,children:n},n))})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Namn",description:""})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Personnummer"})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(l,{label:"Kön",description:"Kan lämnas tomt",placeholder:"Välj kön",selectionMode:"single",items:m.map(n=>({name:n,id:n})),children:n=>e.jsx(p,{...n,children:n.name})})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Ärendekod"})}),e.jsx(i,{size:"auto",children:e.jsx(a,{children:"Sök"})}),e.jsx(i,{size:"auto",children:e.jsx(a,{variant:"secondary",children:"Rensa"})})]})})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
