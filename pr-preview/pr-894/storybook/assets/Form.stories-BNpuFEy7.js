import{j as n}from"./iframe-BUv19Pfm.js";import{$ as j}from"./Form-BhhFYFdK.js";import{G}from"./Grid-BvodVJZV.js";import{G as e}from"./GridItem-kNk3k8d3.js";import{T as r}from"./TextField-KpFW8sf9.js";import{S as I}from"./Select-Nx0W-UFD.js";import{B as a}from"./Button-DW5K109X.js";import{R as g,a as b}from"./Radio-SbLERjpL.js";import{C as h}from"./CheckboxGroup-Di09Lc8u.js";import{C as k}from"./Checkbox-BRBuYnCF.js";import"./preload-helper-Dp1pzeXC.js";import"./utils-wWdqzEgH.js";import"./clsx-B-dksMZM.js";import"./useFormValidation-BwGyvT8P.js";import"./useFocusRing-BLpf4bXn.js";import"./index-Oaftp3y1.js";import"./index-C0mmQlW6.js";import"./clsx-Ciqy0D92.js";import"./TextFieldBase-BedSJJgd.js";import"./TextField-ng59F7vP.js";import"./FieldError-Cw8Gf3T5.js";import"./Text-DqfUBUk_.js";import"./Text-CgVBjen3.js";import"./RSPContexts-oPcm55Gc.js";import"./Group-B62KHRgM.js";import"./Input-C9M8XiOG.js";import"./Hidden-ibpybbWV.js";import"./Button-Bnuz47IZ.js";import"./useLabels-8eOjNWa3.js";import"./useButton-DTRM6duW.js";import"./useTextField-X3TyAi7H.js";import"./useControlledState-D20wQpuO.js";import"./useField-Dla95OlV.js";import"./TextField.module-Ddb2XBAw.js";import"./Label-Br0Q1-_V.js";import"./Dialog-DiRYy73t.js";import"./OverlayArrow-BGs9dnrD.js";import"./useResizeObserver-DI8brG3s.js";import"./Collection-DeB8TAUW.js";import"./index-B5yu0L8Q.js";import"./Separator-DhqU9bgi.js";import"./SelectionManager-CoNEjUPJ.js";import"./useEvent-CChhRtjC.js";import"./scrollIntoView-CBbya3YB.js";import"./SelectionIndicator-CyQwPxO9.js";import"./useDescription-L2Otz7rx.js";import"./ListKeyboardDelegate-DDFdbo7s.js";import"./PressResponder-BEreutJG.js";import"./useLocalizedStringFormatter-BEZuMr3D.js";import"./LocalizedStringFormatter-BB0Nk989.js";import"./getScrollParent-BYz-ejQ6.js";import"./VisuallyHidden-8tTSqkmf.js";import"./useLocalizedStringFormatter-CYP25e31.js";import"./x-Bys3oTSS.js";import"./createLucideIcon-Dr9gusPm.js";import"./Heading-Cgxh7xOL.js";import"./info-DiT6WgHy.js";import"./Popover-DjWdpSu_.js";import"./Tag-phd__SSQ.js";import"./ListBox-DFa8_B5R.js";import"./DragAndDrop-Doz6ZDLQ.js";import"./inertValue-DtmBromy.js";import"./useListState-DKeldJzT.js";import"./useHighlightSelectionDescription-Bn2ULeOh.js";import"./useUpdateEffect-BHub5D10.js";import"./useHasTabbableChild-BFWdYEJD.js";import"./check-BR5VH8Zr.js";import"./ListBoxSection-DX2Di-_v.js";import"./Virtualizer-B12TYVRH.js";import"./chevron-down-D0BQyLrC.js";import"./Button.module-CcWMkJAG.js";import"./useToggleState-B8Tba3LN.js";const $n={component:j,title:"Examples/Form",tags:["autodocs"],argTypes:{}},m={args:{},render:()=>{const t=["Banan","Apple","Mango"];return n.jsxs(G,{children:[n.jsx(e,{size:12,children:n.jsx(r,{label:"Ange ditt fullständiga namn",description:"Glöm inte dina eventuella mellannamn!"})}),n.jsx(e,{size:12,children:n.jsx(r,{label:"Personnummmer",description:"Anges på formen ÅÅMMDD-XXXX"})}),n.jsx(e,{size:12,children:n.jsx(I,{label:"Vilken är din favoritfrukt",placeholder:"Välj en frukt",selectionMode:"single",options:t.map(o=>({id:o,name:o}))})}),n.jsx(e,{children:n.jsx(a,{children:"Skicka"})})]})}},s={args:{},render:()=>{const t=["A","B","C"],o=["Anledning A","Anledning B","Anledning C"];return n.jsx("div",{children:n.jsxs(G,{children:[n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(g,{label:"Anledning",description:"Ange anledning till att du söker i databasen",children:o.map(i=>n.jsx(b,{value:i,children:i},i))})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(h,{label:"Databas",description:"Välj databas att söka i",children:t.map(i=>n.jsx(k,{value:i,children:i},i))})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(r,{label:"Namn",description:""})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(r,{label:"Personnummer"})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(I,{label:"Kön",description:"Kan lämnas tomt",placeholder:"Välj kön",selectionMode:"single",options:t.map(i=>({name:i,id:i}))})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(r,{label:"Ärendekod"})}),n.jsx(e,{size:"auto",children:n.jsx(a,{children:"Sök"})}),n.jsx(e,{size:"auto",children:n.jsx(a,{variant:"secondary",children:"Rensa"})})]})})}};var d,l,p;m.parameters={...m.parameters,docs:{...(d=m.parameters)==null?void 0:d.docs,source:{originalSource:`{
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
