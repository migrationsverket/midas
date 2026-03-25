import{j as e}from"./iframe-ArSWsRFy.js";import{c}from"./Form-vy4xYy7s.js";import{G as d}from"./Grid-Du-TM9Rl.js";import{G as i}from"./GridItem-xyzfW8m4.js";import{a as x,R as u}from"./Radio-Bn9kS3YL.js";import{C as I}from"./CheckboxGroup-DeLKCZDb.js";import{C as G}from"./Checkbox-C3cCG3pc.js";import{T as t}from"./TextField-DahUAmVr.js";import{S as l}from"./Select-C-4z-wi4.js";import{L as p}from"./ListBoxItem-CQX-Rli-.js";import{B as a}from"./Button-B7NXJoV0.js";import"./preload-helper-PPVm8Dsz.js";import"./useFocusRing-CuEBX_ny.js";import"./utils-Bk01FJOF.js";import"./clsx-B-dksMZM.js";import"./index-h5O7gEHG.js";import"./index-CBhfX2fa.js";import"./clsx-Ciqy0D92.js";import"./Group-DYodJDFD.js";import"./FieldError-BB8VxeZz.js";import"./Text-BQUF3iRq.js";import"./Text-DS3DZlwG.js";import"./Button-BEQHwt_x.js";import"./Hidden-DhQXB3Em.js";import"./useLabel-CGDLzIxe.js";import"./useLabels-P6wNBidM.js";import"./useButton-2SAmbr6R.js";import"./SelectionIndicator-Cqwo4HnX.js";import"./useField-DlDxRxY8.js";import"./VisuallyHidden-B7lPtWpQ.js";import"./useControlledState-BLEc30eS.js";import"./Label-BdTDheCy.js";import"./Dialog-BGE7U275.js";import"./RSPContexts-CKQVnrYn.js";import"./OverlayArrow-BfiwfXhj.js";import"./useResizeObserver-CR40r6I-.js";import"./Collection-DZCSkdwZ.js";import"./index-DU4gV6qj.js";import"./Separator-C42XK-kH.js";import"./SelectionManager-CNDAMxo0.js";import"./useEvent-CgDJG_HR.js";import"./scrollIntoView-DWLREkUa.js";import"./useDescription-CmtmyFdo.js";import"./ListKeyboardDelegate-8jmwT1OX.js";import"./PressResponder-Bj_Xw0Nh.js";import"./useLocalizedStringFormatter-C8sflf6-.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-KcLlQzwX.js";import"./getScrollParent-i8KlRQrJ.js";import"./x-BmJ6_yih.js";import"./createLucideIcon-xPhfpX1g.js";import"./useLocalizedStringFormatter-BNDpmOum.js";import"./Heading-BDFRiPQe.js";import"./info-C-Waxotl.js";import"./Popover-tE_8b65N.js";import"./check-CuxevX3h.js";import"./useToggleState-Dpzzl7TP.js";import"./TextFieldBase-cLw5mIYf.js";import"./Input-DsE3bmq_.js";import"./useTextField-CMi09hYa.js";import"./TextField.module-DdivwlC8.js";import"./intlStrings-ZMTSFH_M.js";import"./ListBox-BjHIuFFr.js";import"./DragAndDrop-CIvLnLdv.js";import"./inertValue-Dm9SdRsw.js";import"./useListState-8qogjkBs.js";import"./TagGroup-Dt7U8A48.js";import"./useHighlightSelectionDescription-qWKlWj5u.js";import"./useUpdateEffect-DqP3JGEJ.js";import"./useHasTabbableChild-BJV807y1.js";import"./chevron-down-6TBWaAu1.js";import"./Virtualizer-Bbx8YnEP.js";import"./Button.module-BB7N-cLd.js";const Xe={component:c,title:"Examples/Form",tags:["autodocs"],argTypes:{}},o={args:{},render:()=>{const m=["Banan","Apple","Mango"];return e.jsxs(d,{children:[e.jsx(i,{size:12,children:e.jsx(t,{label:"Ange ditt fullständiga namn",description:"Glöm inte dina eventuella mellannamn!"})}),e.jsx(i,{size:12,children:e.jsx(t,{label:"Personnummmer",description:"Anges på formen ÅÅMMDD-XXXX"})}),e.jsx(i,{size:12,children:e.jsx(l,{label:"Vilken är din favoritfrukt",placeholder:"Välj en frukt",selectionMode:"single",items:m.map(r=>({id:r,name:r})),children:r=>e.jsx(p,{...r,children:r.name})})}),e.jsx(i,{children:e.jsx(a,{children:"Skicka"})})]})}},s={args:{},render:()=>{const m=["A","B","C"],r=["Anledning A","Anledning B","Anledning C"];return e.jsx("div",{children:e.jsxs(d,{children:[e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(x,{label:"Anledning",description:"Ange anledning till att du söker i databasen",children:r.map(n=>e.jsx(u,{value:n,children:n},n))})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(I,{label:"Databas",description:"Välj databas att söka i",children:m.map(n=>e.jsx(G,{value:n,children:n},n))})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Namn",description:""})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Personnummer"})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(l,{label:"Kön",description:"Kan lämnas tomt",placeholder:"Välj kön",selectionMode:"single",items:m.map(n=>({name:n,id:n})),children:n=>e.jsx(p,{...n,children:n.name})})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Ärendekod"})}),e.jsx(i,{size:"auto",children:e.jsx(a,{children:"Sök"})}),e.jsx(i,{size:"auto",children:e.jsx(a,{variant:"secondary",children:"Rensa"})})]})})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
