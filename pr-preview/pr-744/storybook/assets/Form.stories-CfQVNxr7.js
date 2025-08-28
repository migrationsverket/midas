import{j as n}from"./iframe-P5IyoOKp.js";import{$ as j}from"./Form-DTTftuJO.js";import{G}from"./Grid-CqXQ9NBi.js";import{G as e}from"./GridItem-03D4s95H.js";import{T as r}from"./TextField-D6wrlDX4.js";import{S as I}from"./Select-CbM6lRpM.js";import{B as a}from"./Button-DGteMHsa.js";import{R as g,a as b}from"./Radio-DVVSDwsS.js";import{C as h}from"./CheckboxGroup-BGzQJU4J.js";import{C as k}from"./Checkbox-0OjAhU10.js";import"./preload-helper-Dp1pzeXC.js";import"./utils-BMmhu9Qw.js";import"./clsx-B-dksMZM.js";import"./useFormValidation-_X_vFltb.js";import"./useFocusRing-Bhx8O4iA.js";import"./index-DGLZuWIc.js";import"./index-B41adBfF.js";import"./TextFieldBase-BkPAE-Fn.js";import"./TextField-CQUdm5w8.js";import"./FieldError-C-l8cn2e.js";import"./Text-Dh0Gu6y1.js";import"./Text-OCH6cKY6.js";import"./Input-DNN3peAE.js";import"./Hidden-D_gelNDL.js";import"./Button-M8zl3yb7.js";import"./useLabels-C9w4JgAc.js";import"./useButton-BDB40xhj.js";import"./useTextField-B-NeE9GY.js";import"./useControlledState-mlAz-KiJ.js";import"./useField-BybZttPf.js";import"./TextField.module-C33Y04O9.js";import"./Label-C8FWcJW3.js";import"./Dialog-DrnxWH9V.js";import"./RSPContexts-9qqeClaE.js";import"./OverlayArrow-BEKPWX5e.js";import"./useResizeObserver-CPdQ8jFL.js";import"./Collection-BP7CVz7c.js";import"./index-P17BipiU.js";import"./Separator-Zvx0n8f5.js";import"./SelectionManager-vJutWhRn.js";import"./useEvent-C0GPQNsf.js";import"./scrollIntoView-Dsrcj58z.js";import"./FocusScope-9pnGGbKm.js";import"./useDescription-MSDNNxVC.js";import"./ListKeyboardDelegate-DJySD-Hr.js";import"./PressResponder-2LMr772f.js";import"./useLocalizedStringFormatter-BW1u6orQ.js";import"./LocalizedStringFormatter-BB0Nk989.js";import"./getScrollParent-CvodOSaS.js";import"./VisuallyHidden-T8dCikvD.js";import"./Dialog-BhdR5T4x.js";import"./useLocalizedStringFormatter-ByMfkpIC.js";import"./x-H99edj8y.js";import"./createLucideIcon-Cbttg5ER.js";import"./Heading-CT9TqDvE.js";import"./info-IzAZyBjJ.js";import"./Tag-D8o0jBQV.js";import"./ListBox-QsNBEzHR.js";import"./DragAndDrop-C3CrnxA9.js";import"./inertValue-CaE-gMpK.js";import"./useListState-B0cDEF2D.js";import"./useHighlightSelectionDescription-aol10l6m.js";import"./useUpdateEffect-CqC0WFeM.js";import"./useHasTabbableChild-k9nrqPwd.js";import"./check-pVSnFAb3.js";import"./ListBoxSection-l9JH9srS.js";import"./Virtualizer-CmtRzfGp.js";import"./useObserveElement-DFBJkgT3.js";import"./chevron-down-lbU0a05W.js";import"./Button.module-DKVuWS4g.js";import"./Group-DIUWp4Xv.js";import"./useToggleState-Cebj2W44.js";const $n={component:j,title:"Examples/Form",tags:["autodocs"],argTypes:{}},m={args:{},render:()=>{const t=["Banan","Apple","Mango"];return n.jsxs(G,{children:[n.jsx(e,{size:12,children:n.jsx(r,{label:"Ange ditt fullständiga namn",description:"Glöm inte dina eventuella mellannamn!"})}),n.jsx(e,{size:12,children:n.jsx(r,{label:"Personnummmer",description:"Anges på formen ÅÅMMDD-XXXX"})}),n.jsx(e,{size:12,children:n.jsx(I,{label:"Vilken är din favoritfrukt",placeholder:"Välj en frukt",selectionMode:"single",options:t.map(o=>({id:o,name:o}))})}),n.jsx(e,{children:n.jsx(a,{children:"Skicka"})})]})}},s={args:{},render:()=>{const t=["A","B","C"],o=["Anledning A","Anledning B","Anledning C"];return n.jsx("div",{children:n.jsxs(G,{children:[n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(g,{label:"Anledning",description:"Ange anledning till att du söker i databasen",children:o.map(i=>n.jsx(b,{value:i,children:i},i))})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(h,{label:"Databas",description:"Välj databas att söka i",children:t.map(i=>n.jsx(k,{value:i,children:i},i))})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(r,{label:"Namn",description:""})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(r,{label:"Personnummer"})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(I,{label:"Kön",description:"Kan lämnas tomt",placeholder:"Välj kön",selectionMode:"single",options:t.map(i=>({name:i,id:i}))})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(r,{label:"Ärendekod"})}),n.jsx(e,{size:"auto",children:n.jsx(a,{children:"Sök"})}),n.jsx(e,{size:"auto",children:n.jsx(a,{variant:"secondary",children:"Rensa"})})]})})}};var d,l,p;m.parameters={...m.parameters,docs:{...(d=m.parameters)==null?void 0:d.docs,source:{originalSource:`{
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
