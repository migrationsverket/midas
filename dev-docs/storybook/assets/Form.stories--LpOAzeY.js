import{j as n}from"./iframe-CTL4r7_b.js";import{$ as j}from"./Form-4OmDJt74.js";import{G}from"./Grid-tMpwh3cA.js";import{G as e}from"./GridItem-DdT834qJ.js";import{T as r}from"./TextField-D-Zx2Q_A.js";import{S as I}from"./Select-Ch2WEIl7.js";import{B as a}from"./Button-lPZrtwZu.js";import{R as g,a as b}from"./Radio-c-R7n3P_.js";import{C as h}from"./CheckboxGroup-D_9e94vh.js";import{C as k}from"./Checkbox-B5YzfmE7.js";import"./preload-helper-Dp1pzeXC.js";import"./utils-BTDv0sf-.js";import"./clsx-B-dksMZM.js";import"./useFormValidation-m1ontXhz.js";import"./useFocusRing-CH0ORiIx.js";import"./index-CIbrClOO.js";import"./index-DEMpS_QV.js";import"./TextFieldBase-CGRkdvdI.js";import"./TextField-BOBW-fN6.js";import"./FieldError-Kf7pfG7J.js";import"./Text-WSbInOZT.js";import"./Text-C5CX2GVn.js";import"./Input-DBRAxM9j.js";import"./Hidden-bJoJypaE.js";import"./Button-BfymJqjF.js";import"./useLabels-BlYOAd12.js";import"./useButton-6WKLglwY.js";import"./useTextField-C-5onn7K.js";import"./useControlledState-Bb-l3oKD.js";import"./useField-C8A4oUHx.js";import"./TextField.module-BrIGiDQC.js";import"./Label-CPTpXLjK.js";import"./Dialog-DirjpP7c.js";import"./RSPContexts-DbajWaU0.js";import"./OverlayArrow-DksFyyug.js";import"./useResizeObserver-BHXwejHn.js";import"./Collection-BR_fRKsV.js";import"./index-CkzwM3Z9.js";import"./Separator-QYKXvxGT.js";import"./SelectionManager-DFmE5oYq.js";import"./useEvent-C848nLe6.js";import"./scrollIntoView-Dsrcj58z.js";import"./FocusScope-5bP6Lag-.js";import"./useDescription-Dpc4OW8j.js";import"./ListKeyboardDelegate-hr0X9aK6.js";import"./PressResponder-4BpzYumY.js";import"./useLocalizedStringFormatter-B9gIXrmE.js";import"./LocalizedStringFormatter-BB0Nk989.js";import"./getScrollParent-CvodOSaS.js";import"./VisuallyHidden-hYTt21wA.js";import"./Dialog-Dz7wEHU5.js";import"./useLocalizedStringFormatter-dj3xDVJu.js";import"./x-CcX0oAd4.js";import"./createLucideIcon-DMacB6LC.js";import"./Heading-CvRh8nxo.js";import"./info-BF684tve.js";import"./Tag-DuJ9v5Su.js";import"./ListBox-sIKdU5An.js";import"./DragAndDrop-CtnuzlsE.js";import"./inertValue-CtHc_oK6.js";import"./useListState-CKrPGKX0.js";import"./useHighlightSelectionDescription-D5yeSq0j.js";import"./useUpdateEffect-Dc7jAOoh.js";import"./useHasTabbableChild-BWmBZ5Ez.js";import"./check-DvyazkvO.js";import"./ListBoxSection-BIN_9Bmd.js";import"./Virtualizer-Rko0eMtK.js";import"./useObserveElement-DMDLT59R.js";import"./chevron-down-0KvlzrpA.js";import"./Button.module-CF2bVDCq.js";import"./Group-CyrhkrR8.js";import"./useToggleState-C1jEFa0V.js";const $n={component:j,title:"Examples/Form",tags:["autodocs"],argTypes:{}},m={args:{},render:()=>{const t=["Banan","Apple","Mango"];return n.jsxs(G,{children:[n.jsx(e,{size:12,children:n.jsx(r,{label:"Ange ditt fullständiga namn",description:"Glöm inte dina eventuella mellannamn!"})}),n.jsx(e,{size:12,children:n.jsx(r,{label:"Personnummmer",description:"Anges på formen ÅÅMMDD-XXXX"})}),n.jsx(e,{size:12,children:n.jsx(I,{label:"Vilken är din favoritfrukt",placeholder:"Välj en frukt",selectionMode:"single",options:t.map(o=>({id:o,name:o}))})}),n.jsx(e,{children:n.jsx(a,{children:"Skicka"})})]})}},s={args:{},render:()=>{const t=["A","B","C"],o=["Anledning A","Anledning B","Anledning C"];return n.jsx("div",{children:n.jsxs(G,{children:[n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(g,{label:"Anledning",description:"Ange anledning till att du söker i databasen",children:o.map(i=>n.jsx(b,{value:i,children:i},i))})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(h,{label:"Databas",description:"Välj databas att söka i",children:t.map(i=>n.jsx(k,{value:i,children:i},i))})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(r,{label:"Namn",description:""})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(r,{label:"Personnummer"})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(I,{label:"Kön",description:"Kan lämnas tomt",placeholder:"Välj kön",selectionMode:"single",options:t.map(i=>({name:i,id:i}))})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(r,{label:"Ärendekod"})}),n.jsx(e,{size:"auto",children:n.jsx(a,{children:"Sök"})}),n.jsx(e,{size:"auto",children:n.jsx(a,{variant:"secondary",children:"Rensa"})})]})})}};var d,l,p;m.parameters={...m.parameters,docs:{...(d=m.parameters)==null?void 0:d.docs,source:{originalSource:`{
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
          <Select label='Vilken är din favoritfrukt' placeholder='Välj en frukt' selectionMode='single' options={ITEMS.map(i => ({
          id: i,
          name: i
        }))} />
        </GridItem>

        <GridItem>
          <Button>Skicka</Button>
        </GridItem>
      </Grid>;
  }
}`,...(p=(l=m.parameters)==null?void 0:l.docs)==null?void 0:p.source}}};var c,x,u;s.parameters={...s.parameters,docs:{...(c=s.parameters)==null?void 0:c.docs,source:{originalSource:`{
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
            <Select label='Kön' description='Kan lämnas tomt' placeholder='Välj kön' selectionMode='single' options={ITEMS.map(i => ({
            name: i,
            id: i
          }))} />
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
}`,...(u=(x=s.parameters)==null?void 0:x.docs)==null?void 0:u.source}}};const wn=["SimpleForm","TwoColumnForm"];export{m as SimpleForm,s as TwoColumnForm,wn as __namedExportsOrder,$n as default};
