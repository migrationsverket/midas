import{j as n}from"./iframe-B_ygYNkI.js";import{$ as j}from"./Form-BJG6ri3O.js";import{G}from"./Grid-CMzqmCbs.js";import{G as e}from"./GridItem-mXSmQ8Jv.js";import{T as r}from"./TextField-BpPK3UWK.js";import{S as I}from"./Select-tawG6FF8.js";import{B as a}from"./Button-B-vuvhpN.js";import{R as g,a as b}from"./Radio-CSPkIq0G.js";import{C as h}from"./CheckboxGroup-B-ImLU78.js";import{C as k}from"./Checkbox-D7uboohj.js";import"./preload-helper-Dp1pzeXC.js";import"./utils-CXsj727F.js";import"./clsx-B-dksMZM.js";import"./useFormValidation-DQ-DrMkl.js";import"./useFocusRing-DQn-e4pR.js";import"./index-D8MlaW6J.js";import"./index-CPUP237Z.js";import"./clsx-Ciqy0D92.js";import"./TextFieldBase-CFGDDE4u.js";import"./FieldError-Vo2yk1PA.js";import"./Text-HoaiwDmI.js";import"./Text-CdpZfcKZ.js";import"./RSPContexts-D0ALC_tS.js";import"./Group-DPhGvzs5.js";import"./Input-BRRANiRj.js";import"./Hidden-glhldbCg.js";import"./Button-DMhyuXvl.js";import"./useLabels-4ym5HR4k.js";import"./useButton-oVtVVevU.js";import"./useTextField-CHDqMhJL.js";import"./useControlledState-C9qVCaaE.js";import"./useField-DmAsGA14.js";import"./TextField.module-Ddb2XBAw.js";import"./Label-D_zNKIyu.js";import"./Dialog-Dqzhz9x6.js";import"./OverlayArrow-Bxop-R1f.js";import"./useResizeObserver-Bn76dmuL.js";import"./Collection-BKKTYarE.js";import"./index-xqO8xPMl.js";import"./Separator-qbyZkIpX.js";import"./SelectionManager-hN3Mg3In.js";import"./useEvent-j_Fr0Fkm.js";import"./scrollIntoView-DHLPPniT.js";import"./SelectionIndicator-h-yKrdJ_.js";import"./useDescription-J4yXttox.js";import"./ListKeyboardDelegate-DllJju6w.js";import"./PressResponder-ic_rd789.js";import"./useLocalizedStringFormatter-D3srnXI9.js";import"./LocalizedStringFormatter-BB0Nk989.js";import"./getScrollParent-DUubX-Bx.js";import"./VisuallyHidden-CGR0QuAJ.js";import"./useLocalizedStringFormatter-DaVXzdm8.js";import"./x-DJ-2z-Iw.js";import"./createLucideIcon-BP2N8NK_.js";import"./Heading-z6_badJB.js";import"./info-BRmASJZr.js";import"./Popover-Bzl1ixSZ.js";import"./Tag-ByEmQqYN.js";import"./ListBox-DgyjhOBj.js";import"./DragAndDrop-Bs497dMc.js";import"./inertValue-Bnxbtd7A.js";import"./useListState-CVnasb7m.js";import"./useHighlightSelectionDescription-B8a8RhkT.js";import"./useUpdateEffect-NmOk22I9.js";import"./useHasTabbableChild-Czmo9uAh.js";import"./check-CITebWau.js";import"./ListBoxSection-BKfkb5mM.js";import"./Virtualizer-BIUqDZPa.js";import"./useObserveElement-DK09pGIS.js";import"./chevron-down-Cg1uLN1S.js";import"./Button.module-CcWMkJAG.js";import"./useToggleState-BjNdEtTK.js";const $n={component:j,title:"Examples/Form",tags:["autodocs"],argTypes:{}},m={args:{},render:()=>{const t=["Banan","Apple","Mango"];return n.jsxs(G,{children:[n.jsx(e,{size:12,children:n.jsx(r,{label:"Ange ditt fullständiga namn",description:"Glöm inte dina eventuella mellannamn!"})}),n.jsx(e,{size:12,children:n.jsx(r,{label:"Personnummmer",description:"Anges på formen ÅÅMMDD-XXXX"})}),n.jsx(e,{size:12,children:n.jsx(I,{label:"Vilken är din favoritfrukt",placeholder:"Välj en frukt",selectionMode:"single",options:t.map(o=>({id:o,name:o}))})}),n.jsx(e,{children:n.jsx(a,{children:"Skicka"})})]})}},s={args:{},render:()=>{const t=["A","B","C"],o=["Anledning A","Anledning B","Anledning C"];return n.jsx("div",{children:n.jsxs(G,{children:[n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(g,{label:"Anledning",description:"Ange anledning till att du söker i databasen",children:o.map(i=>n.jsx(b,{value:i,children:i},i))})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(h,{label:"Databas",description:"Välj databas att söka i",children:t.map(i=>n.jsx(k,{value:i,children:i},i))})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(r,{label:"Namn",description:""})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(r,{label:"Personnummer"})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(I,{label:"Kön",description:"Kan lämnas tomt",placeholder:"Välj kön",selectionMode:"single",options:t.map(i=>({name:i,id:i}))})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(r,{label:"Ärendekod"})}),n.jsx(e,{size:"auto",children:n.jsx(a,{children:"Sök"})}),n.jsx(e,{size:"auto",children:n.jsx(a,{variant:"secondary",children:"Rensa"})})]})})}};var d,l,p;m.parameters={...m.parameters,docs:{...(d=m.parameters)==null?void 0:d.docs,source:{originalSource:`{
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
