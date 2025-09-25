import{j as n}from"./iframe-03bl15Pq.js";import{$ as j}from"./Form-CV7DjTrl.js";import{G}from"./Grid-Dv7g548I.js";import{G as e}from"./GridItem-B5KMsW7E.js";import{T as r}from"./TextField-Dr0jUGiw.js";import{S as I}from"./Select-i9g7nN1E.js";import{B as a}from"./Button-DBv9eMM9.js";import{R as g,a as b}from"./Radio-C9-SNpHv.js";import{C as h}from"./CheckboxGroup-DqSPkqpS.js";import{C as k}from"./Checkbox-CyZo7HZA.js";import"./preload-helper-Dp1pzeXC.js";import"./utils-DQhed-XE.js";import"./clsx-B-dksMZM.js";import"./useFormValidation-C-XPlBSt.js";import"./useFocusRing-B-R9x7xW.js";import"./index-CgIKPXij.js";import"./index-ldRdWatF.js";import"./TextFieldBase-DjCc4hck.js";import"./TextField-CXOS-beO.js";import"./FieldError-C4oqYwqW.js";import"./Text-C8KZGiRM.js";import"./Text-Bc2juEP9.js";import"./ListKeyboardDelegate-BJwZcYz0.js";import"./SelectionManager-m50heGLh.js";import"./useEvent-CT_7PF97.js";import"./scrollIntoView-Dsrcj58z.js";import"./FocusScope-BeDLaaEg.js";import"./useDescription-DyVX4Oin.js";import"./useControlledState-WVP6eZA7.js";import"./Group-BtsBVztU.js";import"./Input-CeZrk-fx.js";import"./Hidden-lvVwvomZ.js";import"./Button-CDm6KBUf.js";import"./useLabels-CdQWBbGy.js";import"./useButton-D-fmmoZd.js";import"./useTextField-BzununJ7.js";import"./useField-CQhd9cmj.js";import"./TextField.module-DjUItNl5.js";import"./Label-D5zfpVOa.js";import"./Dialog-DtWmdSZU.js";import"./RSPContexts-BQNBT0ij.js";import"./OverlayArrow-F1brqCCh.js";import"./useResizeObserver-64qlLMVR.js";import"./Collection-BTXoDtD5.js";import"./index-IsmXDkzC.js";import"./Separator-CL1vQ6Y8.js";import"./PressResponder-Ba-nSuzl.js";import"./useLocalizedStringFormatter-BU6Ymfvz.js";import"./LocalizedStringFormatter-BB0Nk989.js";import"./getScrollParent-CvodOSaS.js";import"./VisuallyHidden-CJ-bgBwG.js";import"./Dialog-BzJg6VSW.js";import"./useLocalizedStringFormatter-BvD3ZnMC.js";import"./x-Bxqu1m4H.js";import"./createLucideIcon-CkuuQGpD.js";import"./Heading-Cz-PF_96.js";import"./info-DMPAJC50.js";import"./Tag-CzhzgRUW.js";import"./ListBox-C9OPswFX.js";import"./DragAndDrop-B4c1rXb1.js";import"./inertValue-IgpF7-GT.js";import"./useListState-BwR1P9YJ.js";import"./useHighlightSelectionDescription-CctuL2m_.js";import"./useUpdateEffect-DBAA5H3_.js";import"./useHasTabbableChild-DKkJoUvi.js";import"./check-CZu82oaz.js";import"./ListBoxSection-B9Lk1Tf3.js";import"./Virtualizer--quQ0t59.js";import"./useObserveElement-CUiDbasK.js";import"./chevron-down-Bm_RyEBk.js";import"./Button.module-DRhvPh0f.js";import"./useToggleState-BW2yC6zc.js";const $n={component:j,title:"Examples/Form",tags:["autodocs"],argTypes:{}},m={args:{},render:()=>{const t=["Banan","Apple","Mango"];return n.jsxs(G,{children:[n.jsx(e,{size:12,children:n.jsx(r,{label:"Ange ditt fullständiga namn",description:"Glöm inte dina eventuella mellannamn!"})}),n.jsx(e,{size:12,children:n.jsx(r,{label:"Personnummmer",description:"Anges på formen ÅÅMMDD-XXXX"})}),n.jsx(e,{size:12,children:n.jsx(I,{label:"Vilken är din favoritfrukt",placeholder:"Välj en frukt",selectionMode:"single",options:t.map(o=>({id:o,name:o}))})}),n.jsx(e,{children:n.jsx(a,{children:"Skicka"})})]})}},s={args:{},render:()=>{const t=["A","B","C"],o=["Anledning A","Anledning B","Anledning C"];return n.jsx("div",{children:n.jsxs(G,{children:[n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(g,{label:"Anledning",description:"Ange anledning till att du söker i databasen",children:o.map(i=>n.jsx(b,{value:i,children:i},i))})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(h,{label:"Databas",description:"Välj databas att söka i",children:t.map(i=>n.jsx(k,{value:i,children:i},i))})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(r,{label:"Namn",description:""})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(r,{label:"Personnummer"})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(I,{label:"Kön",description:"Kan lämnas tomt",placeholder:"Välj kön",selectionMode:"single",options:t.map(i=>({name:i,id:i}))})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(r,{label:"Ärendekod"})}),n.jsx(e,{size:"auto",children:n.jsx(a,{children:"Sök"})}),n.jsx(e,{size:"auto",children:n.jsx(a,{variant:"secondary",children:"Rensa"})})]})})}};var d,l,p;m.parameters={...m.parameters,docs:{...(d=m.parameters)==null?void 0:d.docs,source:{originalSource:`{
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
