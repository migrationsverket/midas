import{j as n}from"./iframe-Bt5BCSK6.js";import{$ as j}from"./Form-Bd62q39E.js";import{G}from"./Grid-CNy-54ih.js";import{G as e}from"./GridItem-B-UkHp93.js";import{T as r}from"./TextField-mZJlYKRg.js";import{S as I}from"./Select-BYuqlQr4.js";import{B as a}from"./Button-J94j78JB.js";import{R as g,a as b}from"./Radio-1kpX2vgf.js";import{C as h}from"./CheckboxGroup-UVV6ctOB.js";import{C as k}from"./Checkbox-CGJMYuYS.js";import"./preload-helper-Dp1pzeXC.js";import"./utils-CsswLWtO.js";import"./clsx-B-dksMZM.js";import"./useFormValidation-MpkUjCRo.js";import"./useFocusRing-DIIev-6G.js";import"./index-WEXT2FaS.js";import"./index-DPd9Oftm.js";import"./TextFieldBase-29VDaO_q.js";import"./TextField-CLNPMzdM.js";import"./FieldError-Datp2aZs.js";import"./Text-DgNzr69B.js";import"./Text-CiZz2gZG.js";import"./ListKeyboardDelegate-C7o4o0Ff.js";import"./SelectionManager-CT07L_Pn.js";import"./useEvent-B7FcpZYZ.js";import"./scrollIntoView-Dsrcj58z.js";import"./FocusScope-DkJF3Bsn.js";import"./useDescription-Bp2Np1Dt.js";import"./useControlledState-CIJTKetX.js";import"./Group-DJY7aQwS.js";import"./Input-DxS3wJm_.js";import"./Hidden-Bf_bwtz_.js";import"./Button-BhqG5zJ6.js";import"./useLabels-46aUmcuu.js";import"./useButton-DuiDPM6R.js";import"./useTextField-B53O9pjE.js";import"./useField-B3rAk4DZ.js";import"./TextField.module-DjUItNl5.js";import"./Label-YD54sNAc.js";import"./Dialog-BLWs2gIq.js";import"./RSPContexts-CIrEzb6g.js";import"./OverlayArrow-ub-lObiA.js";import"./useResizeObserver-BQHbuu6m.js";import"./Collection-DcEkg4rQ.js";import"./index-CD41B8Uk.js";import"./Separator-K-pWpzsL.js";import"./PressResponder-B2kdQHs0.js";import"./useLocalizedStringFormatter-DXS3lOR7.js";import"./LocalizedStringFormatter-BB0Nk989.js";import"./getScrollParent-CvodOSaS.js";import"./VisuallyHidden-FRBi9i8H.js";import"./Dialog-VUQInVkc.js";import"./useLocalizedStringFormatter-BiFia0ij.js";import"./x-D3chdXJT.js";import"./createLucideIcon-BtfC57m1.js";import"./Heading-BJNM1L_r.js";import"./info-Dnqy1fpD.js";import"./Tag-c_4zmQos.js";import"./ListBox-B0Szz3nB.js";import"./DragAndDrop-Bd7kxZwV.js";import"./inertValue-CyrQeEwL.js";import"./useListState-D-aqtVq8.js";import"./useHighlightSelectionDescription-B3r3M0m0.js";import"./useUpdateEffect-dCCrN3Ch.js";import"./useHasTabbableChild-BQ3sOC1T.js";import"./check-l3ldi6ML.js";import"./ListBoxSection-DeKunTE2.js";import"./Virtualizer-CF3MdovZ.js";import"./useObserveElement-fJ6bjQL6.js";import"./chevron-down-D5CS4kYo.js";import"./Button.module-DRhvPh0f.js";import"./useToggleState-26FbMwjC.js";const $n={component:j,title:"Examples/Form",tags:["autodocs"],argTypes:{}},m={args:{},render:()=>{const t=["Banan","Apple","Mango"];return n.jsxs(G,{children:[n.jsx(e,{size:12,children:n.jsx(r,{label:"Ange ditt fullständiga namn",description:"Glöm inte dina eventuella mellannamn!"})}),n.jsx(e,{size:12,children:n.jsx(r,{label:"Personnummmer",description:"Anges på formen ÅÅMMDD-XXXX"})}),n.jsx(e,{size:12,children:n.jsx(I,{label:"Vilken är din favoritfrukt",placeholder:"Välj en frukt",selectionMode:"single",options:t.map(o=>({id:o,name:o}))})}),n.jsx(e,{children:n.jsx(a,{children:"Skicka"})})]})}},s={args:{},render:()=>{const t=["A","B","C"],o=["Anledning A","Anledning B","Anledning C"];return n.jsx("div",{children:n.jsxs(G,{children:[n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(g,{label:"Anledning",description:"Ange anledning till att du söker i databasen",children:o.map(i=>n.jsx(b,{value:i,children:i},i))})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(h,{label:"Databas",description:"Välj databas att söka i",children:t.map(i=>n.jsx(k,{value:i,children:i},i))})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(r,{label:"Namn",description:""})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(r,{label:"Personnummer"})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(I,{label:"Kön",description:"Kan lämnas tomt",placeholder:"Välj kön",selectionMode:"single",options:t.map(i=>({name:i,id:i}))})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(r,{label:"Ärendekod"})}),n.jsx(e,{size:"auto",children:n.jsx(a,{children:"Sök"})}),n.jsx(e,{size:"auto",children:n.jsx(a,{variant:"secondary",children:"Rensa"})})]})})}};var d,l,p;m.parameters={...m.parameters,docs:{...(d=m.parameters)==null?void 0:d.docs,source:{originalSource:`{
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
