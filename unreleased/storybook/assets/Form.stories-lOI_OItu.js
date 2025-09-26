import{j as n}from"./iframe-zWigmtFB.js";import{$ as j}from"./Form-BrVbtod3.js";import{G}from"./Grid-hKoYjLwD.js";import{G as e}from"./GridItem-FISkhzWv.js";import{T as r}from"./TextField-BEKcDO9i.js";import{S as I}from"./Select-DzLp0oqw.js";import{B as a}from"./Button-CyIAlysD.js";import{R as g,a as b}from"./Radio-BPOMNgD5.js";import{C as h}from"./CheckboxGroup-BgKfPTK0.js";import{C as k}from"./Checkbox-DdCTd2Qq.js";import"./preload-helper-Dp1pzeXC.js";import"./utils-BsxkMpxe.js";import"./clsx-B-dksMZM.js";import"./useFormValidation-DJ7mE2q0.js";import"./useFocusRing-BMMSP3-Z.js";import"./index-B7CPDKOG.js";import"./index-Ddaez_49.js";import"./TextFieldBase-DtVNh2fD.js";import"./TextField-Jj5aFGhR.js";import"./FieldError-gKpUtrTp.js";import"./Text-DI8aNg9Y.js";import"./Text-BsmYT46W.js";import"./context-aydN7z4F.js";import"./SelectionManager-2vqQHZOS.js";import"./useEvent-B6U1SIzB.js";import"./scrollIntoView-Dsrcj58z.js";import"./FocusScope-D6Iom0DX.js";import"./useDescription-B8FqEPJN.js";import"./useControlledState-Qayqlgpb.js";import"./Group-I4xGHOyi.js";import"./Input-BDQBgiBP.js";import"./Hidden-FATdxLWW.js";import"./Button-BbMWiBN3.js";import"./useLabels-BGeUF98g.js";import"./useButton-BXbNFX8R.js";import"./useTextField-NGwPT0de.js";import"./useField-BvLlJ7zv.js";import"./TextField.module-DjUItNl5.js";import"./Label-Cbj_iN_9.js";import"./Dialog-BtEcTD4U.js";import"./RSPContexts-D4noY3zl.js";import"./OverlayArrow-B0AQ8Wr7.js";import"./useResizeObserver-C5TKnemL.js";import"./Collection-COPFEjNP.js";import"./index-BroFlfqd.js";import"./Separator-Drtvbzsn.js";import"./PressResponder-DLBVUXGX.js";import"./useLocalizedStringFormatter-Do-bTiUs.js";import"./LocalizedStringFormatter-BB0Nk989.js";import"./getScrollParent-CvodOSaS.js";import"./VisuallyHidden-BOYd9G8_.js";import"./useLocalizedStringFormatter-xxshnfiQ.js";import"./x-C6Q9eAkr.js";import"./createLucideIcon-D7kIpWrG.js";import"./Heading-BI1nwZp5.js";import"./info-C320UqRo.js";import"./Popover-sBSaoFe0.js";import"./Tag-FVKlB6Yr.js";import"./ListBox-D3ApAiyU.js";import"./DragAndDrop-Byx1QHQm.js";import"./inertValue-ywW1Bg59.js";import"./useListState-Dh92tzeP.js";import"./useHighlightSelectionDescription-DiNiM9Ps.js";import"./useUpdateEffect-CDyzNyIq.js";import"./useHasTabbableChild-BGfb07w0.js";import"./check-CwdM_1Zx.js";import"./ListBoxSection-D_3FFRX5.js";import"./Virtualizer-C_bXo_cm.js";import"./useObserveElement-B-Hs-yZh.js";import"./chevron-down-bF1hTwfq.js";import"./Button.module-DRhvPh0f.js";import"./useToggleState-DkITHDzj.js";const $n={component:j,title:"Examples/Form",tags:["autodocs"],argTypes:{}},m={args:{},render:()=>{const t=["Banan","Apple","Mango"];return n.jsxs(G,{children:[n.jsx(e,{size:12,children:n.jsx(r,{label:"Ange ditt fullständiga namn",description:"Glöm inte dina eventuella mellannamn!"})}),n.jsx(e,{size:12,children:n.jsx(r,{label:"Personnummmer",description:"Anges på formen ÅÅMMDD-XXXX"})}),n.jsx(e,{size:12,children:n.jsx(I,{label:"Vilken är din favoritfrukt",placeholder:"Välj en frukt",selectionMode:"single",options:t.map(o=>({id:o,name:o}))})}),n.jsx(e,{children:n.jsx(a,{children:"Skicka"})})]})}},s={args:{},render:()=>{const t=["A","B","C"],o=["Anledning A","Anledning B","Anledning C"];return n.jsx("div",{children:n.jsxs(G,{children:[n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(g,{label:"Anledning",description:"Ange anledning till att du söker i databasen",children:o.map(i=>n.jsx(b,{value:i,children:i},i))})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(h,{label:"Databas",description:"Välj databas att söka i",children:t.map(i=>n.jsx(k,{value:i,children:i},i))})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(r,{label:"Namn",description:""})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(r,{label:"Personnummer"})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(I,{label:"Kön",description:"Kan lämnas tomt",placeholder:"Välj kön",selectionMode:"single",options:t.map(i=>({name:i,id:i}))})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(r,{label:"Ärendekod"})}),n.jsx(e,{size:"auto",children:n.jsx(a,{children:"Sök"})}),n.jsx(e,{size:"auto",children:n.jsx(a,{variant:"secondary",children:"Rensa"})})]})})}};var d,l,p;m.parameters={...m.parameters,docs:{...(d=m.parameters)==null?void 0:d.docs,source:{originalSource:`{
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
