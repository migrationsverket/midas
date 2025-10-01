import{j as n}from"./iframe-C0PCRCkO.js";import{$ as j}from"./Form-kTdg9JY6.js";import{G}from"./Grid-BeV4ZDRw.js";import{G as e}from"./GridItem-DHSUn9ML.js";import{T as r}from"./TextField-GdTRhnGS.js";import{S as I}from"./Select-BBv0vhXv.js";import{B as a}from"./Button-C-E46qiS.js";import{R as g,a as b}from"./Radio-DApeu7jL.js";import{C as h}from"./CheckboxGroup-DxGy4YoT.js";import{C as k}from"./Checkbox-iUhxtV8j.js";import"./preload-helper-Dp1pzeXC.js";import"./utils-DpVG-ipu.js";import"./clsx-B-dksMZM.js";import"./useFormValidation-CbEn5Kjn.js";import"./useFocusRing-8Q4V7Hyt.js";import"./index-CxMvqUxZ.js";import"./index-CbYfoCda.js";import"./TextFieldBase-BXKPP7Hv.js";import"./TextField-DCBYTbPn.js";import"./FieldError-BEoZULtj.js";import"./Text-BzGSpgeR.js";import"./Text-CPT5AhpW.js";import"./context-C1tYqZyM.js";import"./SelectionManager-B-i3dDZU.js";import"./useEvent-DU28e7fq.js";import"./scrollIntoView-Dsrcj58z.js";import"./FocusScope-BrrGmWgW.js";import"./useDescription-B2zPAnd2.js";import"./useControlledState-pVfQK387.js";import"./Group-CtZzLjvu.js";import"./Input-C-EQatV2.js";import"./Hidden-EKaMX1qv.js";import"./Button-BVnti8bG.js";import"./useLabels-BWLBFXAh.js";import"./useButton-BPUoaxOu.js";import"./useTextField-qi05s9te.js";import"./useField-z8bvFzBr.js";import"./TextField.module-DjUItNl5.js";import"./Label-BzqzDMHa.js";import"./Dialog-CZ2hIJP3.js";import"./RSPContexts-BdVzELQt.js";import"./OverlayArrow-Cps0sUk4.js";import"./useResizeObserver-BIM6yxTJ.js";import"./Collection-nAv8Igft.js";import"./index-fkFBwqMy.js";import"./Separator-BuX4GZyi.js";import"./PressResponder-vB4s75j6.js";import"./useLocalizedStringFormatter-BrsARl8Y.js";import"./LocalizedStringFormatter-BB0Nk989.js";import"./getScrollParent-CvodOSaS.js";import"./VisuallyHidden-CO07thOI.js";import"./useLocalizedStringFormatter-cAnNA39J.js";import"./x-DlLbhjvs.js";import"./createLucideIcon-t963rzNU.js";import"./Heading-DL26e5Du.js";import"./info-BZBgsI3m.js";import"./Popover-B8T58zTE.js";import"./Tag-BdcIfmXZ.js";import"./ListBox-CHro7Mvm.js";import"./DragAndDrop-C9HwE-Jc.js";import"./inertValue-DToNECl5.js";import"./useListState-DjaT4jDR.js";import"./useHighlightSelectionDescription-D79lybyB.js";import"./useUpdateEffect-QmB5rrXQ.js";import"./useHasTabbableChild-H6OMlDXW.js";import"./check-BlXPpQcm.js";import"./ListBoxSection-B9cE5Xvj.js";import"./Virtualizer-D6sIXKY7.js";import"./useObserveElement-DFMkfxxB.js";import"./chevron-down-l6W5XpLw.js";import"./Button.module-DRhvPh0f.js";import"./useToggleState-C-2zu57Z.js";const $n={component:j,title:"Examples/Form",tags:["autodocs"],argTypes:{}},m={args:{},render:()=>{const t=["Banan","Apple","Mango"];return n.jsxs(G,{children:[n.jsx(e,{size:12,children:n.jsx(r,{label:"Ange ditt fullständiga namn",description:"Glöm inte dina eventuella mellannamn!"})}),n.jsx(e,{size:12,children:n.jsx(r,{label:"Personnummmer",description:"Anges på formen ÅÅMMDD-XXXX"})}),n.jsx(e,{size:12,children:n.jsx(I,{label:"Vilken är din favoritfrukt",placeholder:"Välj en frukt",selectionMode:"single",options:t.map(o=>({id:o,name:o}))})}),n.jsx(e,{children:n.jsx(a,{children:"Skicka"})})]})}},s={args:{},render:()=>{const t=["A","B","C"],o=["Anledning A","Anledning B","Anledning C"];return n.jsx("div",{children:n.jsxs(G,{children:[n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(g,{label:"Anledning",description:"Ange anledning till att du söker i databasen",children:o.map(i=>n.jsx(b,{value:i,children:i},i))})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(h,{label:"Databas",description:"Välj databas att söka i",children:t.map(i=>n.jsx(k,{value:i,children:i},i))})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(r,{label:"Namn",description:""})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(r,{label:"Personnummer"})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(I,{label:"Kön",description:"Kan lämnas tomt",placeholder:"Välj kön",selectionMode:"single",options:t.map(i=>({name:i,id:i}))})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(r,{label:"Ärendekod"})}),n.jsx(e,{size:"auto",children:n.jsx(a,{children:"Sök"})}),n.jsx(e,{size:"auto",children:n.jsx(a,{variant:"secondary",children:"Rensa"})})]})})}};var d,l,p;m.parameters={...m.parameters,docs:{...(d=m.parameters)==null?void 0:d.docs,source:{originalSource:`{
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
